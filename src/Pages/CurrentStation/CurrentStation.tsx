import React, { FC, ReactNode, useEffect, useState } from "react";
import { CurrentStationProps } from ".";
import {
  Badge,
  Button,
  Card,
  Space,
  Tabs,
  Tooltip,
  Typography,
  theme,
} from "antd";
import { HistoryOutlined } from "@ant-design/icons";
import dayjs from "dayjs";
import type { TabsProps } from "antd";
import { StationDetail } from "../../Components/StationDetail";
import { ASKUE } from "../../Components/ASKUE";
import { CalendarPPR } from "../../Components/CalendarPPR";
import { CrashLogs } from "../../Components/CrashLogs";
import { Employee } from "../../Components/Employee";
import { Helmet } from "react-helmet";
import { BASE_APP_NAME } from "../../consts";
import { HTTPMethod, useHttp } from "../../hooks/useHttp";
import { useLocation, useParams } from "react-router";
import { apiURL } from "../../api/apiURL";
import { Plant, PlantResponseDto, StatusDecode } from "../../types/plant";

const onChange = (key: string) => {};

const items: TabsProps["items"] = [
  {
    key: "1",
    label: `Подробиці`,
    children: <StationDetail />,
  },
  {
    key: "2",
    label: `АСКУЕ`,
    children: <ASKUE />,
  },
  {
    key: "3",
    label: `Моніторинг`,
    children: `Content of Tab Pane 1`,
  },
  {
    key: "4",
    label: `Календар ППР`,
    children: <CalendarPPR />,
  },
  {
    key: "5",
    label: `Журнал аварій`,
    children: <CrashLogs />,
  },
  {
    key: "6",
    label: `Персонал`,
    children: <Employee />,
  },
  {
    key: "7",
    label: `Склад ЗІП`,
    children: `Content of Tab Pane 1`,
  },
  {
    key: "8",
    label: (
      <Badge size="small" count={5} offset={[10, 0]}>
        Документи
      </Badge>
    ),
    children: `Content of Tab Pane 1`,
  },
];

export const PlantContext = React.createContext<PlantResponseDto | null>(null);

export const CurrentStation: FC<CurrentStationProps> = (props) => {
  const {
    token: { colorPrimary },
  } = theme.useToken();
  const {
    baseUrl,
    station: { allStation },
  } = apiURL;
  const param = useParams();

  const { request } = useHttp();
  const [plant, setPlant] = useState<PlantResponseDto | null>(null);

  async function fetchPlant() {
    const res: PlantResponseDto = await request(
      `${baseUrl}${allStation}/${param.id}`,
      HTTPMethod.GET
    );

    setPlant(res);
  }

  useEffect(() => {
    fetchPlant();
  }, []);

  const titleTooltip = () => {
    return plant?.plantStatusHistory?.map((item) => {
      return (
        <Space direction="horizontal" key={item.id}>
          <Typography style={{ color: "#FFF" }}>
            {StatusDecode[item.currentStatus]}
          </Typography>
          <Typography style={{ color: "#FFF" }}>
            {dayjs(item.createdAt).format("DD.MM.YYYY HH:mm")}
          </Typography>
        </Space>
      );
    });
  };

  const OperationsSlot = () => {
    return (
      <Space>
        <div
          style={{
            backgroundColor: colorPrimary,
            padding: "10px 20px",
            borderRadius: 20,
            fontWeight: 600,
          }}
        >
          {plant && StatusDecode[plant?.status]}
        </div>
        <div
          style={{
            display: "inline-flex",
            borderRadius: 30,
            padding: "8px 16px",
            backgroundColor: "#FFF",
          }}
        >
          <Tooltip placement="bottomLeft" title={titleTooltip}>
            {plant?.plantStatusHistory &&
              dayjs().diff(
                dayjs(plant?.plantStatusHistory.reverse()[0].createdAt),
                "days"
              )}
            {" днів ,"}
            {plant?.plantStatusHistory &&
              dayjs().diff(
                dayjs(plant?.plantStatusHistory.reverse()[0].createdAt),
                "hour"
              ) % 24}

            {" г ,"}
            {plant?.plantStatusHistory &&
              dayjs().diff(
                dayjs(plant?.plantStatusHistory.reverse()[0].createdAt),
                "minutes"
              ) % 60}
            {" хв"}

            <HistoryOutlined />
          </Tooltip>
        </div>
      </Space>
    );
  };

  return (
    <>
      <Helmet>
        <title>{BASE_APP_NAME} | Станція</title>
      </Helmet>
      <div {...props}>
        <div style={{ display: "flex", alignItems: "center", gap: 30 }}>
          <Typography.Title level={2}>{plant?.name}</Typography.Title>
          <div
            style={{
              display: "inline-flex",
              borderRadius: 30,
              padding: "8px 30px",
              backgroundColor: "#FFF",
            }}
          >
            <Typography.Text>{dayjs().format("DD.MM.YYYY")}</Typography.Text>
          </div>
        </div>
        <PlantContext.Provider value={plant}>
          <Tabs
            tabBarExtraContent={<OperationsSlot />}
            defaultActiveKey="1"
            items={items}
            onChange={onChange}
          />
        </PlantContext.Provider>
      </div>
    </>
  );
};

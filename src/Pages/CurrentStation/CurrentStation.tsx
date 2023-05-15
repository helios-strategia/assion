import { FC, ReactNode } from "react";
import { CurrentStationProps } from ".";
import { Badge, Button, Card, Space, Tabs, Typography, theme } from "antd";
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

export const CurrentStation: FC<CurrentStationProps> = (props) => {
  const {
    token: { colorPrimary },
  } = theme.useToken();

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
          Активна: обмкжена генерацыя
        </div>
        <div
          style={{
            display: "inline-flex",
            borderRadius: 30,
            padding: "8px 16px",
            backgroundColor: "#FFF",
          }}
        >
          4 хв.
          <HistoryOutlined />
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
          <Typography.Title level={2}>ФЕС Никополь Елиос</Typography.Title>
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
        <Tabs
          tabBarExtraContent={<OperationsSlot />}
          defaultActiveKey="1"
          items={items}
          onChange={onChange}
        />
      </div>
    </>
  );
};

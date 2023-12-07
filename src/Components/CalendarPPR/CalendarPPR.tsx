import { CalendarPPRProps } from ".";
import { FC, ReactNode, useState } from "react";
import {
  Button,
  Calendar,
  Card,
  Divider,
  Progress,
  Tag,
  Typography,
  theme,
} from "antd";
import { PlusOutlined } from "@ant-design/icons";
import type { Dayjs } from "dayjs";
import dayjs from "dayjs";
import "dayjs/locale/uk";
import { Badge } from "../Badge";
import { doing, works } from "./data";
import { CalendarModal } from "./CalendarModal";
dayjs.locale("uk");

const getListData = (value: Dayjs) => {
  let listData;
  switch (value.date()) {
    case 8:
      listData = [
        { type: "warning", content: "Попередження." },
        { type: "success", content: "Технічні роботи." },
      ];
      break;
    case 10:
      listData = [
        { type: "warning", content: "Попередження." },
        { type: "success", content: "Технічні роботи." },
        { type: "error", content: "Аварія." },
      ];

      break;
    default:
  }
  return listData || [];
};

const getMonthData = (value: Dayjs) => {
  if (value.month() === 8) {
    return 1394;
  }
};

export const CalendarPPR: FC<CalendarPPRProps> = (props) => {
  const monthCellRender = (value: Dayjs) => {
    const num = getMonthData(value);
    return num ? (
      <div className="notes-month">
        <section>{num}</section>
        <span>Backlog number</span>
      </div>
    ) : null;
  };

  const dateCellRender = (value: Dayjs) => {
    const listData = getListData(value);
    return (
      <ul className="events" style={{ listStyle: "none", padding: 0 }}>
        {listData.map((item) => (
          <li key={item.content}>
            <Tag color="red-inverse">{item.content}</Tag>
          </li>
        ))}
      </ul>
    );
  };

  const {
    token: { colorPrimary },
  } = theme.useToken();
  const [openModal, setOpenModal] = useState<boolean>(false);
  return (
    <Card>
      <Typography.Title level={5}>
        Планово-попереджувальні та сервісні роботи
      </Typography.Title>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 40,
        }}
      >
        {works.map((elem) => {
          return (
            <div
              style={{
                width: 100 / works.length + "%",
                backgroundColor: colorPrimary,
                padding: "10px 20px",
                margin: "30px 0",
                display: "flex",
                borderRadius: 8,
                gap: 20,
                alignItems: "center",
              }}
            >
              <div>{elem.icon}</div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <strong style={{ fontSize: 20 }}>{elem.count}</strong>
                <span>{elem.text}</span>
              </div>
            </div>
          );
        })}
      </div>
      <Typography.Text>Зараз виконуються роботи</Typography.Text>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 40,
        }}
      >
        {doing.map((elem) => {
          return (
            <div
              style={{
                width: 100 / doing.length + "%",
                padding: "10px 0",
                display: "flex",
                borderRadius: 8,
                gap: 20,
                alignItems: "center",
              }}
            >
              <Progress
                size={70}
                strokeWidth={10}
                strokeColor={colorPrimary}
                type="circle"
                percent={elem.progress}
              />
              <div style={{ display: "flex", flexDirection: "column" }}>
                {elem.startDate && elem.endDate && (
                  <div>
                    <Badge title="Початок робіт">
                      <small>
                        <strong>{elem.startDate}</strong>
                      </small>
                    </Badge>
                    <Badge title="Кінець робіт">
                      <small>
                        <strong>{elem.endDate}</strong>
                      </small>
                    </Badge>
                  </div>
                )}
                <Typography.Text>{elem.text}</Typography.Text>
              </div>
            </div>
          );
        })}
      </div>
      <Divider />
      <div>
        <Button
          onClick={() => setOpenModal(true)}
          icon={<PlusOutlined />}
          type="primary"
        >
          Нова подія
        </Button>
      </div>
      <Calendar
        dateCellRender={dateCellRender}
        monthCellRender={monthCellRender}
      />
      <CalendarModal open={openModal} setOpen={setOpenModal} />
    </Card>
  );
};

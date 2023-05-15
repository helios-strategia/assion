import { FC, useState } from "react";
import { CrashLogsProps } from ".";
import {
  Button,
  Card,
  Col,
  Collapse,
  Divider,
  Row,
  Typography,
  theme,
} from "antd";
import { crashData } from "./data";
import {
  PlusOutlined,
  WarningFilled,
  CheckCircleFilled,
} from "@ant-design/icons";
import { CrashModal } from "./CrashModal";

const { Panel } = Collapse;
type CrashLogType = {
  date: string;
  location: string;
  photo: string;
  description: string;
  specific: string;
  time: string;
  status: number;
};
const moc: CrashLogType[] = [
  {
    date: "12.07.2023",
    location: "КТЕ-1",
    photo: "https://picsum.photos/300/200",
    description: "Заїдання пуску відсіку повітря",
    specific: "Немає впливу на генерацію",
    time: "14.07.2022",
    status: 1,
  },
  {
    date: "12.07.2023",
    location: "КТЕ-1",
    photo: "https://picsum.photos/300/200",
    description: "Заїдання пуску відсіку повітря",
    specific: "Немає впливу на генерацію",
    time: "14.07.2022",
    status: 2,
  },
];

export const CrashLogs: FC<CrashLogsProps> = (props) => {
  const {
    token: { colorPrimary },
  } = theme.useToken();
  const [openModalCrash, setOpenModalCrash] = useState<boolean>(false);

  return (
    <Card>
      <Typography.Title level={5}>
        Оперативний жкрнал з реєстрації аварії
      </Typography.Title>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 40,
        }}
      >
        {crashData.map((elem) => {
          return (
            <div
              style={{
                minWidth: 250,
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
      <Divider />
      <Button
        onClick={() => setOpenModalCrash(true)}
        type="primary"
        icon={<PlusOutlined />}
      >
        Нова подія
      </Button>
      <Collapse style={{ marginTop: 20 }}>
        {moc.map((elem, index: number) => {
          const { date, location, photo, description, specific, time, status } =
            elem;
          return (
            <Panel
              header={<Typography.Text>{date}</Typography.Text>}
              key={index}
            >
              <Row key={1} gutter={[20, 0]}>
                <Col xs={3}>Локація</Col>
                <Col xs={5}>Фото</Col>
                <Col xs={9}>Дефект та пояснення</Col>
                <Col xs={3}>Специфікая обладнання</Col>
                <Col xs={3}>Орієнтовний час усунення</Col>
                <Col xs={1}></Col>
                <Col xs={24}>
                  <Divider />
                </Col>
                {/* //!! */}

                <Col xs={3}>{location}</Col>
                <Col xs={5}>
                  <img src={photo} width="100%" alt="crash-img" />
                </Col>
                <Col xs={9}>{description}</Col>
                <Col xs={3}>{specific}</Col>
                <Col xs={3}>{time}</Col>
                <Col xs={1}>
                  {status == 1 ? (
                    <span title="Змінити статус">
                      {" "}
                      <WarningFilled style={{ color: "red", fontSize: 20 }} />
                    </span>
                  ) : (
                    <span title="Змінити статус">
                      {" "}
                      <CheckCircleFilled
                        style={{ color: colorPrimary, fontSize: 20 }}
                      />
                    </span>
                  )}
                </Col>
              </Row>
            </Panel>
          );
        })}
      </Collapse>
      <CrashModal open={openModalCrash} setOpen={setOpenModalCrash} />
    </Card>
  );
};

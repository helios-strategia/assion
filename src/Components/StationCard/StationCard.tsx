import { FC } from "react";
import { StationCardProps } from ".";
import {
  Avatar,
  Card,
  Col,
  Progress,
  Row,
  Space,
  Typography,
  theme,
} from "antd";
import {
  UserOutlined,
  CloudFilled,
  ThunderboltOutlined,
} from "@ant-design/icons";
import ReactSpeedometer from "react-d3-speedometer";
import styles from "./Stations.module.css";
import { ProgressHorizontal } from "../ProgressHorizontal";

export const StationCard: FC<StationCardProps> = (props) => {
  const {
    token: { colorPrimary, borderRadius },
  } = theme.useToken();

  return (
    <Card className={styles.wrapper}>
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <Avatar
          style={{ backgroundColor: colorPrimary }}
          size={64}
          icon={<ThunderboltOutlined />}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Typography style={{ fontWeight: 600 }}>Нікополь Еліос</Typography>
          <Typography
            style={{ fontSize: 12, fontWeight: 500, color: colorPrimary }}
          >
            Активна: обмеження генерації
          </Typography>
          <Typography style={{ fontSize: 12 }}>
            Дніпропетровська область
          </Typography>
        </div>
      </div>
      <Row style={{ marginTop: 30 }} gutter={[20, 20]}>
        <Col span={12}>
          <div
            style={{
              backgroundColor: colorPrimary,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: 10,
              borderRadius: 40,
            }}
          >
            <Typography.Text
              style={{ margin: 0, padding: 0, fontWeight: 700, lineHeight: 1 }}
            >
              9.9 Mwat
            </Typography.Text>
            <Typography.Text
              style={{
                color: "#fff",
                fontSize: 12,
                fontWeight: 500,
                lineHeight: 1,
              }}
            >
              Потужність AC
            </Typography.Text>
          </div>
        </Col>

        <Col span={12}>
          <div
            style={{
              backgroundColor: colorPrimary,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: 10,
              borderRadius: 40,
            }}
          >
            <Typography
              style={{ margin: 0, padding: 0, fontWeight: 700, lineHeight: 1 }}
            >
              12 Mwat
            </Typography>
            <Typography
              style={{
                color: "#fff",
                fontSize: 12,
                fontWeight: 700,
                lineHeight: 1,
              }}
            >
              Потужність DC
            </Typography>
          </div>
        </Col>
      </Row>

      <Row style={{ marginTop: 30 }}>
        <ReactSpeedometer
          maxValue={9900}
          value={5950}
          segments={11}
          textColor={"#000"}
          needleColor="rgba(252,188,78, 0.5)"
          startColor="rgba(252,188,78, 0.5)"
          endColor="rgba(252,188,78, 0.5)"
          labelFontSize={"10px"}
          width={300}
          height={180}
        />
      </Row>
      <Row gutter={[10, 10]}>
        <Col span={4}>
          <Typography style={{ lineHeight: "46px", fontSize: 12 }}>
            04:50
          </Typography>
        </Col>
        <Col span={16}>
          <div
            style={{
              height: 46,
              border: `2px solid ${colorPrimary}`,
              borderRadius: 23,
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Typography>Інсоляції регіону</Typography>
            <Typography style={{ fontSize: 12, fontWeight: 700 }}>
              1477 W/m
            </Typography>
          </div>
        </Col>
        <Col span={4}>
          <Typography style={{ lineHeight: "46px", fontSize: 12 }}>
            20:49
          </Typography>
        </Col>
      </Row>
      <Row style={{ marginTop: 20 }}>
        <Col span={18}>
          <Typography style={{ fontSize: 22, fontWeight: 500 }}>
            {new Intl.NumberFormat("ua-UA", {
              style: "unit",
              unit: "celsius",
            }).format(22.41)}
          </Typography>
          <Typography style={{ fontSize: 12, color: "#555" }}>
            Швидкість вітру 2.47 м/с
          </Typography>
        </Col>
        <Col span={6}>
          <CloudFilled style={{ color: "rgb(33,130,221)", fontSize: 80 }} />
        </Col>
      </Row>
      <Row style={{ marginTop: 10 }}>
        <Typography style={{ fontSize: 14, fontWeight: 500 }}>
          Згенеровано від 100% PVSyst
        </Typography>
        <ProgressHorizontal percent={50} />
      </Row>
    </Card>
  );
};

import { FC } from "react";
import { OtherProps } from ".";
import { Col, Row, theme } from "antd";
import { CheckOutlined } from "@ant-design/icons";
import { StationStateIcon } from "./StationStateIcon";
import styles from "./Other.module.css";

import map from "../../../img/map.png";
import { Info } from "./Info";
import { Characteristics } from "./Characteristics";
import { PlanMap } from "./Map";
const data = [
  {
    title: "",
    text: "Зовнішня електромережа",
    icon: <CheckOutlined style={{ color: "#fff", fontSize: 10 }} />,
  },
  {
    title: "",
    text: "Коло змінного струму",
    icon: <CheckOutlined style={{ color: "#fff", fontSize: 10 }} />,
  },
  {
    title: "",
    text: "Коло постійного струму",
    icon: <CheckOutlined style={{ color: "#fff", fontSize: 10 }} />,
  },
  {
    title: "",
    text: "Трансформаторні підстанції",
    icon: <CheckOutlined style={{ color: "#fff", fontSize: 10 }} />,
  },
  {
    title: "",
    text: "Фотополе",
    icon: <CheckOutlined style={{ color: "#fff", fontSize: 10 }} />,
  },
  {
    title: "",
    text: "Моніторинг системи безпеки",
    icon: <CheckOutlined style={{ color: "#fff", fontSize: 10 }} />,
  },
];

export const Other: FC<OtherProps> = (props) => {
  const {
    token: { colorBgContainer, colorPrimary },
  } = theme.useToken();

  return (
    <Row gutter={[30, 30]}>
      <Col xl={12} xxl={10}>
        <Row gutter={[30, 30]}>
          {data.map((item, index) => (
            <Col xs={8} key={index}>
              <StationStateIcon {...item} />
            </Col>
          ))}
        </Row>
        <Row>
          {/* <div className={styles.mapWrapper}>
            <img src={map} alt="map" width={"100%"} />
          </div> */}
          <PlanMap />
        </Row>
      </Col>
      <Col
        md={{ order: 1 }}
        xl={{ span: 24, order: 1 }}
        xxl={{ span: 4, order: 0 }}
      >
        <Info />
      </Col>
      <Col xl={12} xxl={10}>
        <Characteristics />
      </Col>
    </Row>
  );
};

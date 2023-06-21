import { FC, useContext } from "react";
import { OtherProps } from ".";
import { Col, Row, theme } from "antd";
import { CheckOutlined } from "@ant-design/icons";
import { StationStateIcon } from "./StationStateIcon";
import styles from "./Other.module.css";

import map from "../../../img/map.png";
import { Info } from "./Info";
import { Characteristics } from "./Characteristics";
import { PlanMap } from "./Map";
import { PlantContext } from "../../../Pages/CurrentStation";

import a from "../../../img/stateIcons/computer-report-icon.svg";
import b from "../../../img/stateIcons/power-pole-icon.svg";
import kolo from "../../../img/stateIcons/koloStrumu.svg";
import transformator from "../../../img/stateIcons/fuse.png";
import power from "../../../img/stateIcons/power.png";
import area from "../../../img/stateIcons/icons8-area-50.png";

const data = [
  {
    bg: b,
    title: "",
    text: "Зовнішня електромережа",
    icon: <CheckOutlined style={{ color: "#fff", fontSize: 10 }} />,
  },
  {
    bg: power,
    title: "",
    text: "Коло змінного струму",
    icon: <CheckOutlined style={{ color: "#fff", fontSize: 10 }} />,
  },
  {
    bg: kolo,
    title: "",
    text: "Коло постійного струму",
    icon: <CheckOutlined style={{ color: "#fff", fontSize: 10 }} />,
  },
  {
    bg: transformator,
    title: "",
    text: "Трансформаторні підстанції",
    icon: <CheckOutlined style={{ color: "#fff", fontSize: 10 }} />,
  },
  {
    bg: area,
    title: "",
    text: "Фотополе",
    icon: <CheckOutlined style={{ color: "#fff", fontSize: 10 }} />,
  },
  {
    bg: a,
    title: "",
    text: "Моніторинг системи безпеки",
    icon: <CheckOutlined style={{ color: "#fff", fontSize: 10 }} />,
  },
];

export const Other: FC<OtherProps> = (props) => {
  const {
    token: { colorBgContainer, colorPrimary },
  } = theme.useToken();
  const plant = useContext(PlantContext);

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
          <PlanMap
            lat={plant?.locationLatitude}
            lng={plant?.locationLongitude}
          />
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

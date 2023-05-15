import { FC, ReactNode } from "react";
import { HomeProps } from ".";
import { HomeCard, ItemCard } from "../../Components/HomeCard";
import { Col, Row, Typography } from "antd";
import { cardsData } from "./data";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { BASE_APP_NAME } from "../../consts";

const WIDTH = 60;

export const Home: FC<HomeProps> = (props) => {
  return (
    <>
      <Helmet>
        <title>{BASE_APP_NAME} | Головна</title>
      </Helmet>
      <div {...props}>
        <Typography.Title level={3} style={{ marginBottom: 40 }}>
          Огляд
        </Typography.Title>

        <Row gutter={[30, 30]}>
          {cardsData.map((item: ItemCard, index: number) => {
            return (
              <Col xs={12} lg={6} key={index}>
                <Link to={item.to || ""}>
                  <HomeCard item={item} />
                </Link>
              </Col>
            );
          })}
        </Row>
        {/* <div
        style={{
          width: 400,
          height: 400,
          backgroundColor: "transparent",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <div
          style={{
            width: "inherit",
            height: "inherit",
            backgroundColor: "rgba(252,188,78, 0.7)",
            position: "absolute",
            top: "50%",
            borderRadius: "50%",
          }}
        ></div>
        <div
          style={{
            width: `calc(100% - ${WIDTH * 2}px)`,
            height: `calc(100% - ${WIDTH * 2}px)`,
            backgroundColor: "rgb(240,240,240)",
            position: "absolute",
            top: `calc(50% + ${WIDTH}px)`,
            left: WIDTH,
            borderRadius: "50%",
          }}
        ></div>
      </div> */}
      </div>
    </>
  );
};

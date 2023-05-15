import { FC } from "react";
import { StationsProps } from ".";
import { Card, Col, Row, Typography } from "antd";
import { StationCard } from "../../Components/StationCard";
import { PlusCircleFilled } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { BASE_APP_NAME } from "../../consts";

export const Stations: FC<StationsProps> = (props) => {
  return (
    <>
      <Helmet>
        <title>{BASE_APP_NAME} | Станції</title>
      </Helmet>
      <div {...props}>
        <Typography.Title level={3} style={{ marginBottom: 40 }}>
          Сонячні електростанції
        </Typography.Title>
        <Row gutter={[30, 30]}>
          <Col xs={24} md={12} xxl={6} xl={8}>
            <Link
              to={"/stations/1"}
              style={{ width: "fit-content", padding: 0 }}
            >
              <StationCard />
            </Link>
          </Col>

          <Col xs={24} md={12} xxl={6} xl={8}>
            <Link to="/create-station">
              <Card
                style={{
                  width: 340,
                  height: "100%",
                  borderRadius: 8,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                }}
              >
                <PlusCircleFilled style={{ fontSize: 80, color: "#bbb" }} />
              </Card>
            </Link>
          </Col>
        </Row>
      </div>
    </>
  );
};

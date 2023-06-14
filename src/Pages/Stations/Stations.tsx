import { FC, useEffect, useState } from "react";
import { StationsProps } from ".";
import { Card, Col, Image, Row, Skeleton, Spin, Typography } from "antd";
import { StationCard } from "../../Components/StationCard";
import { PlusCircleFilled } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { BASE_APP_NAME } from "../../consts";
import { HTTPMethod, useHttp } from "../../hooks/useHttp";
import { apiURL } from "../../api/apiURL";

export const Stations: FC<StationsProps> = (props) => {
  const {
    baseUrl,
    station: { allStation },
  } = apiURL;

  const { request, loading } = useHttp();

  const [stations, setStations] = useState<any[]>([]);

  useEffect(() => {
    getStations();
  }, []);

  async function getStations() {
    const res = await request(`${baseUrl}${allStation}`, HTTPMethod.GET);

    setStations(res);
  }

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
          {loading ? (
            <Col xs={24} md={12} xxl={6} xl={8}>
              <Card
                style={{
                  width: 340,
                  height: "100%",
                  borderRadius: 8,
                }}
              >
                <Skeleton active />
                <Skeleton active />
                <Skeleton active />
              </Card>
            </Col>
          ) : (
            <>
              {stations.map((station: any, index: number) => {
                return (
                  <Col key={index} xs={24} md={12} xxl={6} xl={8}>
                    <Link
                      to={`/stations/${station.id}`}
                      style={{ width: "fit-content", padding: 0 }}
                    >
                      <StationCard />
                    </Link>
                  </Col>
                );
              })}
            </>
          )}

          <Col xs={24} md={12} xxl={6} xl={8}>
            <Link to="/create-station">
              <Card
                style={{
                  width: 340,
                  minHeight: 600,
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

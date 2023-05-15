import { FC } from "react";
import { WeatherProps } from ".";
import { Spin, Typography } from "antd";
import { useWeather } from "../../../../hooks/useWeather";
import { FireFilled } from "@ant-design/icons";
import { Badge } from "../../../Badge";
import Morning from "../../../../img/morning-icon.svg";
import Evening from "../../../../img/sunrise-icon.svg";
import wind from "../../../../img/wind-icon.svg";
export const Weather: FC<WeatherProps> = (props) => {
  const [weather, weatherLoading] = useWeather();

  return (
    <>
      <Typography style={{ fontWeight: 600 }}>Погода</Typography>
      {!weatherLoading && weather ? (
        <>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography.Title level={3}>
              {new Intl.NumberFormat("ua-UA", {
                style: "unit",
                unit: "celsius",
              }).format(weather.main.temp)}
            </Typography.Title>
            <img height={60} src={weather.icon} alt="weather icon" />
          </div>
          <img height={16} src={wind} alt="" />

          <Typography.Paragraph
            style={{
              fontSize: "0.7rem",
              color: "#555",
              margin: 0,
              padding: 0,
            }}
          >
            Швидкість вітру {weather.wind.speed} м/с
          </Typography.Paragraph>
          <Typography.Paragraph
            style={{
              fontSize: "0.7rem",
              color: "#555",
              margin: 0,
              display: "flex",
              gap: 10,
              alignItems: "center",
            }}
          >
            <img height={16} src={Morning} alt="" />
            04:20
            <img height={16} src={Evening} alt="" />
            20:40
          </Typography.Paragraph>
          <Typography.Paragraph
            style={{ fontSize: "0.7rem", color: "#555", margin: 0 }}
          >
            Світловий день: 20год 16хв
          </Typography.Paragraph>
          <Typography.Paragraph
            style={{ fontSize: "0.7rem", color: "#555", margin: 0 }}
          >
            Завтра{" "}
            {new Intl.NumberFormat("ua-UA", {
              style: "unit",
              unit: "celsius",
            }).format(weather.main.temp)}
          </Typography.Paragraph>
          <Typography.Paragraph style={{ margin: 0 }}>
            Попередження викидів CO<sub style={{ fontSize: 10 }}>2</sub>
          </Typography.Paragraph>
          <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
            <FireFilled style={{ fontSize: 25 }} />
            <Badge title={"Сьогодні"}>
              <small>
                <strong>130.77 т.</strong>
              </small>
            </Badge>
            <Badge title={"Всього"}>
              <small>
                <strong>61 160 т.</strong>
              </small>
            </Badge>
          </div>
        </>
      ) : (
        <Spin tip="Оновлення погоди"></Spin>
      )}
    </>
  );
};

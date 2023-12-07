import { FC, useState } from "react";
import { MainProps } from ".";
import { Col, Progress, Row, Spin, Typography, theme } from "antd";
import ReactSpeedometer from "react-d3-speedometer";
import Chart from "react-apexcharts";
import { Badge } from "../../Badge";
import { Weather } from "./Weather";
import { Personal } from "./Personal";
import { ProgressHorizontal } from "../../ProgressHorizontal";
import { mediaQueryType, useMediaQuery } from "../../../hooks/useMediaQuery";

const optionsChart: ApexCharts.ApexOptions = {
  chart: {
    id: "apexchart-example",
    background: "rgba(252,188,78, 0.2)",
    toolbar: {
      show: false,
    },
  },
  xaxis: {},
  colors: ["rgb(252,188,78)"],
  dataLabels: {
    enabled: false,
  },

  fill: {
    colors: ["rgb(252,188,78)"],
    type: "solid",
  },
  stroke: {
    curve: "smooth",
  },
  yaxis: {
    show: false,
  },
  // grid: {
  // 	row: {
  // 		colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
  // 		opacity: 0.5
  // 	},
  // },
};

export const Main: FC<MainProps> = (props) => {
  const isTablet = useMediaQuery(mediaQueryType.LESS, 1200);
  const [state, setState] = useState({
    series: [
      {
        name: "Станція 1",
        data: [30, 40, 15, 50, 60, 20, 70, 91, 55],
      },
    ],
  });

  const {
    token: { colorPrimary, borderRadius },
  } = theme.useToken();

  const WIDTH_SPEEDOMETER = isTablet ? 500 : 300;
  const HEIGHT_SPEEDOMETER = WIDTH_SPEEDOMETER * 0.6;
  return (
    <Row {...props} gutter={[40, 20]}>
      <Col sm={12} md={12} xl={10} xxl={5}>
        <Typography style={{ fontWeight: 600 }}>
          Поточна потужність ФЕС
        </Typography>
        <div style={{ margin: "auto", marginTop: 20, width: "fit-content" }}>
          <ReactSpeedometer
            maxValue={9900}
            value={5950}
            segments={11}
            textColor={"#000"}
            needleColor="rgba(252,188,78, 0.5)"
            startColor="rgba(252,188,78, 0.5)"
            endColor="rgba(252,188,78, 0.5)"
            labelFontSize={"10px"}
            width={WIDTH_SPEEDOMETER}
            height={HEIGHT_SPEEDOMETER}
          />
        </div>
      </Col>
      <Col
        sm={{ span: 24, order: 1 }}
        md={{ span: 12, order: 0 }}
        xl={14}
        xxl={5}
      >
        <Typography.Text>Сьогодні</Typography.Text>
        <Badge style={{ marginLeft: 10 }} filled>
          <strong>32,84 МВт*год</strong>
        </Badge>
        <div style={{ marginTop: 20 }}>
          <Chart
            series={state.series}
            options={optionsChart}
            type="area"
            height={150}
            width="100%"
          />
        </div>
        <ProgressHorizontal percent={69} />
      </Col>
      <Col sm={{ span: 12, order: 0 }} md={8} xl={10} xxl={4}>
        <Weather />
      </Col>
      <Col
        sm={{ span: 24, order: 1 }}
        md={{ span: 16, order: 0 }}
        xl={14}
        xxl={10}
      >
        <Personal />
      </Col>
    </Row>
  );
};

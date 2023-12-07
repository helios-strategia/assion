import { FC, useState } from "react";
import { ASKUEProps } from ".";
import {
  Card,
  Col,
  Divider,
  Popover,
  Row,
  Segmented,
  Switch,
  Typography,
  theme,
} from "antd";
import {
  CaretRightFilled,
  CaretLeftFilled,
  CaretDownFilled,
  InfoCircleFilled,
} from "@ant-design/icons";
import styles from "./askue.module.css";
import ReactApexChart from "react-apexcharts";
import { ASKUEInfo, InfoItem } from "./askueInfo";
import { log } from "console";

const optionsChart: ApexCharts.ApexOptions = {
  chart: {
    id: "apexchart-example",
    background: "#fff",
    toolbar: {
      show: false,
    },
  },
  xaxis: {},
  colors: ["#7ec224"],
  dataLabels: {
    enabled: false,
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

const dayIndicatorsInfo: InfoItem[] = [
  { text: "Активний прийом", title: "Активний прийом", color: "green" },
  { text: "Активна віддача", title: "Активна віддача", color: "green" },
  { text: "Реактив прийом", title: "Реактив прийом", color: "blue" },
  { text: "Реактив віддача", title: "Реактив віддача", color: "darkBlue" },
];

const defMonth: any = {
  series: [
    {
      name: "Inflation",
      data: [2.3, 3.1, 4.0, 10.1, 4.0, 3.6, 3.2, 2.3, 1.4, 0.8, 0.5, 0.2],
    },
  ],
  options: {
    chart: {
      height: 350,
      type: "bar",
    },
    plotOptions: {
      bar: {
        borderRadius: 10,
        dataLabels: {
          position: "top", // top, center, bottom
        },
      },
    },
    dataLabels: {
      enabled: true,
      formatter: function (val: any) {
        return val + "%";
      },
      offsetY: -20,
      style: {
        fontSize: "12px",
        colors: ["#304758"],
      },
    },

    xaxis: {
      categories: [
        "Січень",
        "Лютий",
        "Березень",
        "Квітень",
        "Травень",
        "Червень",
        "Липень",
        "Серпень",
        "Вересень",
        "Жовтень",
        "Листопад",
        "Грудень",
      ],
      position: "top",
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      crosshairs: {
        fill: {
          type: "gradient",
          gradient: {
            colorFrom: "#D8E3F0",
            colorTo: "#BED1E6",
            stops: [0, 100],
            opacityFrom: 0.4,
            opacityTo: 0.5,
          },
        },
      },
      tooltip: {
        enabled: true,
      },
    },
    yaxis: {
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: false,
        formatter: function (val: any) {
          return val + "%";
        },
      },
    },
    title: {
      text: "Monthly Inflation in Argentina, 2002",
      floating: true,
      offsetY: 330,
      align: "center",
      style: {
        color: "#444",
      },
    },
  },
};

export const ASKUE: FC<ASKUEProps> = (props) => {
  const [state, setState] = useState({
    series: [
      {
        name: "Станція 1",
        data: [30, 40, 15, 50, 60, 20, 70, 91, 55],
      },
    ],
  });

  const [month, setMonth] = useState(defMonth);
  const [showType, setShowType] = useState<string>("year");

  return (
    <Card>
      <Row justify="space-around">
        <Col xs={8}>
          <div className={styles.indicatorsHead}>
            <span>Добові показники віддачі е/е:</span>
            <div className={styles.indicatorsDate}>
              <CaretLeftFilled className={styles.iconBtn} />
              <CaretRightFilled className={styles.iconBtn} />
              <time>11.07.2023</time>
              <CaretDownFilled className={styles.iconBtn} />
            </div>
          </div>
          <div className={styles.indicatorsDataWrapper}>
            <div className={styles.indicatorsData}>
              59508 <small>кВт*год</small>
            </div>
            <div className={styles.indicatorsData}>
              259 508,57 <small>грн</small>
            </div>
          </div>
        </Col>
        <Col xs={8}>
          <div className={styles.indicatorsHead}>
            <span>Щомісячні показники віддачі е/е:</span>
            <div className={styles.indicatorsDate}>
              <CaretLeftFilled className={styles.iconBtn} />
              <CaretRightFilled className={styles.iconBtn} />
              <time>11.07.2023</time>
              <CaretDownFilled className={styles.iconBtn} />
            </div>
          </div>
          <div className={styles.indicatorsDataWrapper}>
            <div className={styles.indicatorsData}>
              59508 <small> кВт*год</small>
            </div>
            <div className={styles.indicatorsData}>
              259 508,57 <small>грн</small>
            </div>
          </div>
        </Col>
      </Row>
      <Segmented
        value={showType}
        options={[
          { label: "Рік", value: "year" },
          { label: "Місяць", value: "month" },
        ]}
        onChange={(value) => setShowType(value.toString())}
      />
      <Divider />
      <p className={styles.bigText}>
        Добові показання віддачі е/е за останній день
      </p>
      <div className={styles.chartWrapper}>
        <ASKUEInfo infoData={dayIndicatorsInfo} />
        <ReactApexChart
          series={state.series}
          options={optionsChart}
          type="line"
          height={350}
        />
      </div>
      <p className={styles.bigText}>Щомісячні та річні показники віддачі е/е</p>
      <div className={styles.chartWrapper}>
        <ASKUEInfo infoData={dayIndicatorsInfo} />
        <ReactApexChart
          options={month.options}
          series={month.series}
          type="bar"
          height={350}
        />
      </div>
    </Card>
  );
};

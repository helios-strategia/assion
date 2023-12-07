import React, { ReactNode } from "react";
import {
  HourglassOutlined,
  PlayCircleOutlined,
  PauseCircleOutlined,
  ToolOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";

export type doingType = {
  progress: number;
  text: string;
  startDate?: string;
  endDate?: string;
};

export const doing: doingType[] = [
  {
    progress: 55,
    text: "Огляд цілістності огорожі станції",
  },
  {
    progress: 55,
    text: "Огляд цілістності огорожі станції",
  },
  {
    progress: 55,
    text: "Огляд цілістності огорожі станції",
  },
  {
    progress: 55,
    text: "Скошування трави на території обекту",
    startDate: "01.06.2023",
    endDate: "05.06.2023",
  },
  {
    progress: 55,
    text: "Скошування трави на території обекту",
    startDate: "01.06.2023",
    endDate: "05.06.2023",
  },
];

export type workType = {
  count: number;
  text: string;
  icon: ReactNode;
};
export const works: workType[] = [
  {
    count: 25,
    text: "Робіт в черзі виконання",
    icon: <HourglassOutlined style={{ color: "#FFF", fontSize: 25 }} />,
  },
  {
    count: 5,
    text: "В ході виконання",
    icon: <PlayCircleOutlined style={{ color: "#FFF", fontSize: 25 }} />,
  },
  {
    count: 1,
    text: "Призупинено робіт",
    icon: <PauseCircleOutlined style={{ color: "#FFF", fontSize: 25 }} />,
  },
  {
    count: 7,
    text: "Виконані роботи",
    icon: <CheckCircleOutlined style={{ color: "#FFF", fontSize: 25 }} />,
  },
  {
    count: 2,
    text: "Непланових робіт",
    icon: <ToolOutlined style={{ color: "#FFF", fontSize: 25 }} />,
  },
];

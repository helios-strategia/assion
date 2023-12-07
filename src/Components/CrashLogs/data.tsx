import { ReactNode } from "react";
import {
  WarningOutlined,
  CloseCircleOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons";
export type CrashType = {
  count: number;
  text: string;
  icon: ReactNode;
};

export const crashData: CrashType[] = [
  {
    count: 1,
    text: "Аварій за період",
    icon: <WarningOutlined style={{ color: "#FFF", fontSize: 25 }} />,
  },
  {
    count: 0,
    text: "Впливають на генерацію",
    icon: <CloseCircleOutlined style={{ color: "#FFF", fontSize: 25 }} />,
  },
  {
    count: 1,
    text: "Впливають на роботу",
    icon: <ExclamationCircleOutlined style={{ color: "#FFF", fontSize: 25 }} />,
  },
];

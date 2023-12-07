import {
  UserOutlined,
  UsergroupAddOutlined,
  PlusCircleFilled,
  InsertRowBelowOutlined,
} from "@ant-design/icons";
import { ItemCard } from "../../Components/HomeCard";
import { theme } from "antd";

const bgIconStyle: any = {
  color: "rgba(252,188,78, 0.5)",
  fontSize: 100,
  position: "absolute",
  bottom: 5,
  right: 5,
};

export const cardsData: ItemCard[] = [
  {
    title: "Обліковий запис",
    icon: <UserOutlined style={bgIconStyle} />,
    to: "/account",
  },
  {
    title: "Сонячні станціЇ",
    icon: <InsertRowBelowOutlined style={bgIconStyle} />,
    to: "stations",
  },
  {
    title: "Створити нову станцію",
    icon: <InsertRowBelowOutlined style={bgIconStyle} />,
    content: <PlusCircleFilled style={{ fontSize: 40, color: "#bbb" }} />,
    to: "/create-station",
  },
  {
    title: "Список користувачів",
    icon: <UsergroupAddOutlined style={bgIconStyle} />,
    to: "/users",
  },
];

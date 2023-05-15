import { FC } from "react";
import { HeaderAppProps } from ".";
import { Header } from "antd/es/layout/layout";
import { Avatar, Dropdown, Typography, theme } from "antd";
import {
  BellFilled,
  IdcardFilled,
  UserOutlined,
  LockFilled,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import { MenuProps, Tag } from "antd";

export const HeaderApp: FC<HeaderAppProps> = (props) => {
  const {
    token: { colorBgContainer, colorPrimary },
  } = theme.useToken();
  const items: MenuProps["items"] = [
    {
      key: "3",
      label: (
        <Tag color="warning">
          <Typography.Text>Вася Пупкін</Typography.Text>
        </Tag>
      ),
    },
    {
      key: "1",
      label: (
        <Link rel="noopener noreferrer" to="/account#main">
          <IdcardFilled style={{ color: colorPrimary, marginRight: 5 }} />
          Основна інформація
        </Link>
      ),
    },
    {
      key: "2",
      label: (
        <Link rel="noopener noreferrer" to="/account#privacy">
          <LockFilled style={{ color: colorPrimary, marginRight: 5 }} />
          Безпека
        </Link>
      ),
    },
  ];

  return (
    <Header
      style={{
        padding: "0 50px",
        background: "transparent",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        gap: 30,
      }}
    >
      <div
        style={{ height: 26, width: 36, overflow: "hidden", borderRadius: 4 }}
      >
        <div style={{ height: 12, backgroundColor: "blue" }} />
        <div style={{ height: 12, backgroundColor: "#dd0" }} />
      </div>
      <BellFilled style={{ color: colorPrimary, fontSize: 26 }} />
      <Dropdown menu={{ items }} placement="bottomRight" arrow>
        <Link to="/account">
          <Avatar
            size={26}
            style={{ backgroundColor: colorPrimary }}
            icon={<UserOutlined style={{ fontSize: 18 }} />}
          />
        </Link>
      </Dropdown>
    </Header>
  );
};

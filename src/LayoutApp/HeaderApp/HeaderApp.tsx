import { FC } from "react";
import { HeaderAppProps } from ".";
import { Header } from "antd/es/layout/layout";
import { Avatar, Button, Dropdown, Typography, theme } from "antd";
import {
  BellFilled,
  IdcardFilled,
  UserOutlined,
  LockFilled,
  LogoutOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import { MenuProps, Tag } from "antd";
import { useAuth } from "../../hooks/useAuth";

export const HeaderApp: FC<HeaderAppProps> = (props) => {
  const { signOut } = useAuth();

  const {
    token: { colorBgContainer, colorPrimary },
  } = theme.useToken();
  const items: MenuProps["items"] = [
    {
      key: "account",
      label: (
        <Tag color="warning">
          <Typography.Text>Вася Пупкін</Typography.Text>
        </Tag>
      ),
    },
    {
      key: "main",
      label: (
        <Link rel="noopener noreferrer" to="/account#main">
          <IdcardFilled style={{ color: colorPrimary, marginRight: 5 }} />
          Основна інформація
        </Link>
      ),
    },
    {
      key: "privacy",
      label: (
        <Link rel="noopener noreferrer" to="/account#privacy">
          <LockFilled style={{ color: colorPrimary, marginRight: 5 }} />
          Безпека
        </Link>
      ),
    },
    {
      key: "signout",
      label: (
        <Button onClick={signOut} style={{ width: "100%" }}>
          <LogoutOutlined style={{ color: colorPrimary, marginRight: 5 }} />
          Выйти
        </Button>
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

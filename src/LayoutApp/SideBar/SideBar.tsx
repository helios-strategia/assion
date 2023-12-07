import { FC, useState } from "react";
import { SideBarProps } from ".";
import { Menu, theme, Layout } from "antd";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  UnlockFilled,
  FileTextFilled,
  LayoutFilled,
  GoldFilled,
  ProfileFilled,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

const { Sider } = Layout;

export const SideBar: FC<SideBarProps> = ({}) => {
  const {
    token: { colorPrimary },
  } = theme.useToken();

  return (
    <Sider
      theme="light"
      collapsible
      defaultCollapsed={true}
      style={{ position: "relative" }}
    >
      <Menu
        style={{ position: "sticky", top: 0 }}
        mode="inline"
        items={[
          {
            key: "1",
            icon: <LayoutFilled style={{ color: colorPrimary }} />,
            label: <Link to="/">Огляд</Link>,
          },
          {
            key: "2",
            icon: <GoldFilled style={{ color: colorPrimary }} />,
            label: <Link to="/stations">Сонячні електростанції</Link>,
          },
          {
            key: "3",
            icon: <ProfileFilled style={{ color: colorPrimary }} />,
            label: <Link to="/users">Користувачі</Link>,
          },
        ]}
      />
    </Sider>
  );
};

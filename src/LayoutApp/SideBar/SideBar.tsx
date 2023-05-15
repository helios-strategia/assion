import { FC, useState } from "react";
import { SideBarProps } from ".";
import Sider from "antd/es/layout/Sider";
import { Menu, theme } from "antd";
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

export const SideBar: FC<SideBarProps> = ({}) => {
  const [collapsed, setCollapsed] = useState<boolean>(true);

  const {
    token: { colorPrimary },
  } = theme.useToken();

  return (
    <Sider
      theme="light"
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
    >
      <Menu
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

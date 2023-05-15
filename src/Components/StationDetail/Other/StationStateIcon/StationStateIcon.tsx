import React, { FC } from "react";
import { StationStateIconProps } from ".";
import { Avatar, Badge, Col, Row, Space, Typography, theme } from "antd";
import { CheckOutlined } from "@ant-design/icons";

export const StationStateIcon: FC<StationStateIconProps> = ({
  text,
  title,
  state,
  icon,
}) => {
  const {
    token: { colorBgContainer, colorPrimary },
  } = theme.useToken();

  return (
    <Space direction="horizontal">
      <div style={{ position: "relative", width: 50 }}>
        <Avatar style={{ backgroundColor: colorPrimary }} size={50}></Avatar>
        <div
          style={{
            position: "absolute",
            bottom: 0,
            right: 0,
            backgroundColor: "#888",
            borderRadius: "50%",
            width: 15,
            height: 15,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <span title={title} style={{}}>
            {icon}
          </span>
        </div>
      </div>
      <Typography>{text}</Typography>
    </Space>
  );
};

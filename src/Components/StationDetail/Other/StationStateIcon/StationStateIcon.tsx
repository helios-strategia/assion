import React, { FC } from "react";
import { StationStateIconProps } from ".";
import {
  Avatar,
  Badge,
  Col,
  Row,
  Space,
  Tooltip,
  Typography,
  theme,
} from "antd";
import io from "socket.io-client";
export const StationStateIcon: FC<StationStateIconProps> = ({
  text,
  title,
  state,
  icon,
  bg,
}) => {
  const {
    token: { colorBgContainer, colorPrimary },
  } = theme.useToken();

  return (
    <Space direction="horizontal">
      <div style={{ position: "relative", width: 50 }}>
        {/* <Avatar
          src={bg}
          style={{ backgroundColor: colorPrimary }}
          size={50}
        ></Avatar> */}

        <div
          style={{
            backgroundColor: colorPrimary,
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 60,
            height: 60,
          }}
        >
          {bg && <img width={35} height={35} src={bg} alt={text} />}
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 0,
            right: -10,
            backgroundColor: "#888",
            borderRadius: "50%",
            width: 18,
            height: 18,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Tooltip title={title || "Все впорядку"}>{icon}</Tooltip>
        </div>
      </div>
      <Typography>{text}</Typography>
    </Space>
  );
};

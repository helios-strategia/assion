import React, { Dispatch, FC, useEffect, useState } from "react";
import { AppProps } from ".";
import { LayoutApp } from "../../LayoutApp/Layout";
import { ConfigProvider, ThemeConfig } from "antd";
import UA from "antd/locale/uk_UA";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "../../Hoc/AuthProvider";

export const App: FC<AppProps> = (props) => {
  const theme: ThemeConfig = {
    token: {
      colorPrimary: "rgb(252,188,78)",
      colorBgLayout: "rgb(240,240,240)",
      //borderRadiusLG: 30,
      //borderRadiusSM: 15,
      //borderRadius: 20,
    },
  };

  return (
    <BrowserRouter>
      <AuthProvider>
        <ConfigProvider locale={UA} theme={theme}>
          <LayoutApp />
        </ConfigProvider>
      </AuthProvider>
    </BrowserRouter>
  );
};

import React, { FC, useEffect, useState } from "react";
import { AccountProps } from ".";
import { Card, Col, Row, Tabs, Typography, theme } from "antd";
import { MainAccount } from "./MainAccount";
import { PrivacyAccount } from "./PrivacyAccount";
import { useHref, useLocation, useNavigate } from "react-router";
import { Helmet } from "react-helmet";
import { BASE_APP_NAME } from "../../consts";
import { LockFilled, IdcardFilled } from "@ant-design/icons";

export const Account: FC<AccountProps> = (props) => {
  const {
    token: { colorPrimary },
  } = theme.useToken();

  const urlData = useLocation();
  const navigate = useNavigate();

  const [activeKey, setActiveKey] = useState<string>("#main");

  useEffect(() => {
    if (urlData.hash) {
      setActiveKey(urlData.hash);
    }
  }, [urlData.hash]);

  function tabHandler(value: string) {
    navigate(`/account${value}`);
  }

  return (
    <>
      <Helmet>
        <title>{BASE_APP_NAME} | Account</title>
      </Helmet>
      <Card>
        <Tabs
          onChange={tabHandler}
          activeKey={activeKey}
          tabPosition={"left"}
          style={{ height: 220 }}
          items={[
            {
              label: (
                <Typography.Text>
                  <IdcardFilled style={{ color: colorPrimary }} />
                  Основна інформація
                </Typography.Text>
              ),
              key: "#main",
              children: <MainAccount />,
            },
            {
              label: (
                <Typography.Text>
                  <LockFilled style={{ color: colorPrimary }} />
                  Безпека
                </Typography.Text>
              ),
              key: "#privacy",
              children: <PrivacyAccount />,
            },
          ]}
        />
      </Card>
    </>
  );
};

import { FC, useContext } from "react";
import { LayoutProps } from ".";
import { Button, Col, Layout, Row, theme } from "antd";
import { SideBar } from "../SideBar";
import { Content } from "antd/es/layout/layout";
import { HeaderApp } from "../HeaderApp";
import { AuthorizedRouter, UnAuthorizedRouter } from "../../Router";
import { useAuth } from "../../hooks/useAuth";
import styles from "../layout.module.css";
import { Helmet } from "react-helmet";
import { BASE_APP_NAME } from "../../consts";
export const LayoutApp: FC<LayoutProps> = () => {
  const {
    auth: { isAuth },
  } = useAuth();
  return (
    <>
      <Helmet>
        <title>{BASE_APP_NAME}</title>
      </Helmet>
      {isAuth ? (
        <Layout
          hasSider
          style={{ minHeight: "100vh", padding: 0 }}
          className={styles.wrapper}
        >
          <SideBar className={styles.sidebar} />
          <Layout className="site-layout">
            <HeaderApp className={styles.header} />
            <Content className={styles.content}>
              <AuthorizedRouter />
            </Content>
          </Layout>
        </Layout>
      ) : (
        <UnAuthorizedRouter />
      )}
    </>
  );
};

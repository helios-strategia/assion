import { FC, useContext } from "react";
import { AuthProps } from ".";
import {
  Button,
  Card,
  Col,
  Form,
  Input,
  Layout,
  Row,
  Typography,
  theme,
} from "antd";
import logo from "../../img/logo.png";
import styles from "./auth.module.css";
import { useAuth } from "../../hooks/useAuth";
import { Helmet } from "react-helmet";
import { BASE_APP_NAME } from "../../consts";
const texts = [
  "Моніторинг 24/7",
  "Дані АСКОЕ",
  "Звіти",
  "Процесс роботи сервісної служби",
  "Аналітика",
];

export const Auth: FC<AuthProps> = (props) => {
  const {
    token: { colorPrimary },
  } = theme.useToken();

  const { signIn } = useAuth();

  const onFinish = (data: any) => {
    signIn(data);
  };

  return (
    <>
      <Helmet>
        <title>{BASE_APP_NAME} | Авторизація</title>
      </Helmet>
      <div
        style={{
          overflow: "hidden",
          height: "100%",
        }}
      >
        <Layout
          style={{
            margin: "auto",
            maxWidth: 1900,
            padding: 100,
            position: "relative",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div>
            <Row gutter={[60, 60]} justify="center">
              <Col
                sm={24}
                md={{
                  span: 24,
                  order: 1,
                }}
                lg={{ span: 12, order: 0 }}
              >
                <Row>
                  <Col xs={24}>
                    <Typography.Title
                      level={3}
                      style={{ fontSize: "1.5rem", fontWeight: 600 }}
                    >
                      Вітаємо вас у цифровому менеджеру сонячної електростанції
                    </Typography.Title>
                  </Col>
                  <Col xs={24}>
                    <Typography.Paragraph
                      style={{
                        fontSize: "1.2rem",
                        color: "#555",
                        fontWeight: 500,
                      }}
                    >
                      Керуйте своїм сонячним активом із будь-якої точки світу
                    </Typography.Paragraph>
                  </Col>
                  <Row>
                    {texts.map((text) => {
                      return (
                        <Col
                          xs={12}
                          md={8}
                          lg={12}
                          xxl={8}
                          xl={12}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            height: 120,
                            gap: 10,
                            padding: 10,
                          }}
                        >
                          <div
                            style={{
                              height: 12,
                              width: 12,
                              borderRadius: "50%",
                              backgroundColor: colorPrimary,
                            }}
                          ></div>
                          <Typography.Text
                            strong
                            style={{ fontSize: "1.2rem" }}
                          >
                            {text}
                          </Typography.Text>
                        </Col>
                      );
                    })}
                  </Row>
                </Row>
              </Col>
              <Col
                lg={12}
                sm={{ span: 24, order: -1 }}
                md={16}
                xs={{ span: 24, order: -1 }}
                xl={9}
              >
                <div className={styles.circles}>
                  <Card
                    style={{
                      boxShadow: "2px 2px 4px 4px rgba(120, 120, 120, 0.45)",
                      zIndex: 99999,
                      width: 500,
                      height: 500,
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: 20,
                      }}
                    >
                      <img src={logo} alt="logo" />
                      <Typography.Title
                        style={{ margin: 0, letterSpacing: 2 }}
                        level={2}
                      >
                        ASSION
                      </Typography.Title>
                      <Typography.Paragraph
                        strong
                        style={{
                          marginBottom: 0,
                          fontSize: 18,
                          fontWeight: 500,
                        }}
                      >
                        Увійти до облікового запису
                      </Typography.Paragraph>
                      <Typography.Paragraph>
                        Введіть ваш логін та пароль, фкий вам надав менеджер
                        вашої системи
                      </Typography.Paragraph>
                      <Form
                        style={{
                          width: "100%",
                        }}
                        onFinish={onFinish}
                        initialValues={{
                          email: "vasyapupkin@helios.com",
                          password: "11111111",
                        }}
                      >
                        <Form.Item
                          name="email"
                          required
                          style={{ width: "100%" }}
                          rules={[
                            {
                              required: true,
                              message: "Введіть Email",
                            },
                            {
                              type: "email",
                              message: "Некоректно введений Email",
                            },
                          ]}
                        >
                          <Input
                            style={{ padding: 15 }}
                            size="large"
                            placeholder="Email"
                          />
                        </Form.Item>
                        <Form.Item
                          name="password"
                          required
                          style={{ width: "100%" }}
                          rules={[
                            {
                              required: true,
                              message: "Введіть пароль",
                            },
                          ]}
                        >
                          <Input.Password
                            style={{ padding: 15 }}
                            size="large"
                            placeholder="Пароль"
                          />
                        </Form.Item>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            width: "100%",
                            marginTop: 40,
                          }}
                        >
                          <Button
                            style={{ color: "#000" }}
                            size="large"
                            type="link"
                          >
                            Забули пароль?
                          </Button>
                          <Button
                            htmlType="submit"
                            style={{ width: "30%" }}
                            size="large"
                            type="primary"
                          >
                            Увійти
                          </Button>
                        </div>
                      </Form>
                    </div>
                  </Card>
                </div>
              </Col>
            </Row>
          </div>
          <footer>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 50,
                marginTop: 50,
              }}
            >
              <a target="_blank" href="#" className={styles.link}>
                Умови використання
              </a>
              <a target="_blank" href="#" className={styles.link}>
                Конфеденційніть
              </a>
              <a target="_blank" href="#" className={styles.link}>
                Юридичне повідомлення
              </a>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 50,
                marginTop: 50,
              }}
            >
              <Typography className={styles.helios}>HELIOS</Typography>
              <Typography.Text style={{ color: "#555" }}>
                &copy; 2022 Helios Strategia / Solar Partnership Group
              </Typography.Text>
              <Typography.Text style={{ color: "#555" }}>
                Усі права захищенеі{" "}
              </Typography.Text>
              <Typography.Text
                style={{
                  marginLeft: "auto",
                  border: "2px solid rgba(119,119,119,0.7)",
                  color: "#555",
                  padding: "8px 16px",
                  borderRadius: 20,
                }}
              >
                Версія 0.1.1
              </Typography.Text>
            </div>
          </footer>
        </Layout>
      </div>
    </>
  );
};

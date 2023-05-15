import { FC } from "react";
import { MainAccountProps } from ".";
import {
  Avatar,
  Button,
  Card,
  Col,
  Input,
  Popconfirm,
  Row,
  Space,
  Typography,
  theme,
} from "antd";
import { UserOutlined } from "@ant-design/icons";
import { Role } from "../../../types/user";

export const MainAccount: FC<MainAccountProps> = (props) => {
  const {
    token: { colorPrimary },
  } = theme.useToken();

  return (
    <div>
      <Row gutter={[40, 40]}>
        <Col xs={9}>
          <Card>
            <Space direction="horizontal" size="middle" align="start">
              <Avatar
                style={{ backgroundColor: colorPrimary }}
                size={110}
                icon={<UserOutlined style={{ fontSize: 70 }} />}
              />{" "}
              <Space direction="vertical">
                <Typography.Paragraph strong style={{ fontSize: "1.3rem" }}>
                  Вася Пупкін
                </Typography.Paragraph>
                <Typography.Paragraph>Роль:</Typography.Paragraph>
                <Typography.Paragraph>{Role.ADMIN}</Typography.Paragraph>
              </Space>
            </Space>
          </Card>
        </Col>
        <Col xs={5}>
          <Typography.Paragraph>Телефон</Typography.Paragraph>
          <Input value="+380990009900" />
        </Col>
        <Col xs={5}>
          <Typography.Paragraph>Email</Typography.Paragraph>
          <Input value="AleksandrTest@mail.com" />
        </Col>
        <Col xs={5}>
          <Typography.Paragraph>Імʼя</Typography.Paragraph>
          <Input value="Вася Пупкін" />
        </Col>
      </Row>
      <Row justify="end">
        <Col>
          <Popconfirm title="Ви впевнені що хочете внести зміни ?">
            <Button type="primary">Застосувати зміни</Button>
          </Popconfirm>
        </Col>
      </Row>
    </div>
  );
};

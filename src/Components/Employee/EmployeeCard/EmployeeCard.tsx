import { FC } from "react";
import { EmployeeCardProps } from ".";
import { Avatar, Card, Col, Row, Tag, Typography, theme } from "antd";
import styles from "../../common.module.css";
import { UserOutlined, InfoCircleFilled } from "@ant-design/icons";

export const EmployeeCard: FC<EmployeeCardProps> = (props) => {
  const {
    token: { colorPrimary },
  } = theme.useToken();

  return (
    <Col xs={12}>
      <Card className={styles.card}>
        <Row gutter={[20, 20]}>
          <Col xs={3}>
            <Avatar
              style={{ backgroundColor: colorPrimary }}
              size={80}
              icon={<UserOutlined style={{ fontSize: 55 }} />}
            />
          </Col>
          <Col>
            <Typography.Text strong>Cидор В.С.</Typography.Text>
            <Typography className={styles.smallText}>Управитель ФЕС</Typography>
            <Typography className={styles.smallText}>
              +38093 333 33 33
            </Typography>
          </Col>
          <Col>
            <Typography>Допуск по електробезпеці</Typography>
            <Typography
              className={styles.smallText}
              style={{
                borderBottom: `2px solid ${colorPrimary}`,
                width: "100%",
              }}
            >
              5 группа та вище 1000В
            </Typography>
          </Col>
          <Col flex="1" />
          <Col xs={2}>
            <Tag style={{}} color="warning">
              Працює
            </Tag>
          </Col>
        </Row>
        <Row>
          <Col
            xs={3}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          ></Col>
          <Col xs={18}>
            <Typography style={{ fontWeight: 600 }}>Обовʼязки</Typography>
            <Typography className={styles.smallText}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae,
              mollitia ut, ducimus voluptates veniam perferendis blanditiis
              eveniet veritatis, quam eius odio praesentium autem doloremque
              eligendi.
            </Typography>
          </Col>
        </Row>
        <InfoCircleFilled
          style={{
            float: "right",
            fontSize: 16,
            color: "#555",
            cursor: "pointer",
          }}
        />
      </Card>
    </Col>
  );
};

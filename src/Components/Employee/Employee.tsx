import { FC, useState } from "react";
import { EmployeeProps } from ".";
import {
  Avatar,
  Button,
  Card,
  Col,
  Divider,
  Row,
  Typography,
  theme,
} from "antd";
import { UserOutlined } from "@ant-design/icons";
import styles from "../common.module.css";
import { EmployeeCard } from "./EmployeeCard";
import { CreateEmplyee } from "../CreateEmplyee";

export const Employee: FC<EmployeeProps> = (props) => {
  const {
    token: { colorPrimary },
  } = theme.useToken();

  const [openModalCreateEmployee, setOpenModalCreateEmployee] =
    useState<boolean>(false);

  function showModalCreateEmployee() {
    setOpenModalCreateEmployee(true);
  }

  function hideModalCreateEmployee() {
    setOpenModalCreateEmployee(false);
  }

  return (
    <Card>
      <Typography.Title level={5}>Пенсонал з обслуговування</Typography.Title>
      <Row gutter={[20, 20]}>
        <Col>
          <Avatar
            style={{ backgroundColor: colorPrimary }}
            size={110}
            icon={<UserOutlined style={{ fontSize: 70 }} />}
          />
        </Col>
        <Col>
          <Typography.Text strong>Cидор В.С.</Typography.Text>
          <Typography className={styles.smallText}>Управитель ФЕС</Typography>
          <Typography className={styles.smallText}>+38093 333 33 33</Typography>
          <Typography>Допуск по електробезпеці</Typography>
          <Typography className={styles.smallText}>
            5 группа та вище 1000В
          </Typography>
        </Col>
        <Col xs={10}>
          <Typography style={{ fontWeight: 600 }}>Обовʼязки</Typography>
          <Typography className={styles.smallText}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae,
            mollitia ut, ducimus voluptates veniam perferendis blanditiis
            eveniet veritatis, quam eius odio praesentium autem doloremque
            eligendi. Aliquid, tempora assumenda aliquam itaque praesentium
            sequi nam! Ad enim iste inventore dignissimos, illo aspernatur modi,
            facere fugiat quod ea explicabo? Quod reiciendis ipsam
            necessitatibus.
          </Typography>
        </Col>
      </Row>
      <Divider />
      <div style={{ display: "flex", gap: 30 }}>
        <Button onClick={showModalCreateEmployee} type="primary">
          Додати співробітника
        </Button>
        <Button type="primary">Графік чергових</Button>
      </div>
      <Row gutter={[60, 40]} style={{ marginTop: 30 }}>
        <EmployeeCard />
        <EmployeeCard />
      </Row>
      <CreateEmplyee
        open={openModalCreateEmployee}
        hideModal={hideModalCreateEmployee}
      />
    </Card>
  );
};

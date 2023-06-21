import { FC, useContext } from "react";
import { InfoProps } from ".";
import { Col, Row, Typography } from "antd";
import styles from "../Other.module.css";
import { PlantContext } from "../../../../Pages/CurrentStation";

export const Info: FC<InfoProps> = (props) => {
  const plant = useContext(PlantContext);

  return (
    <Row gutter={[20, 30]}>
      <Col xs={12} md={24}>
        <Typography style={{ fontSize: "1.2rem", fontWeight: 600 }}>
          {plant?.name}
        </Typography>
        <Typography.Paragraph className={styles.smallText}>
          Код ЄДРПОУ: 42023443
        </Typography.Paragraph>
        <Typography.Paragraph className={styles.smallText}>
          Платник ПДВ № свідоцтва
        </Typography.Paragraph>
        <Typography.Paragraph className={styles.smallText}>
          4200230437548
        </Typography.Paragraph>
        <Typography.Paragraph
          className={styles.smallText}
          style={{ marginTop: 20 }}
        >
          Адреса
        </Typography.Paragraph>
        <Typography.Paragraph className={styles.smallText}>
          Україна 49044, Дніпропетровська обл м Дніпро пр Дмитра яворницбкого 39
        </Typography.Paragraph>
      </Col>
      <Col xs={12} md={24}>
        <Typography.Paragraph className={styles.smallText}>
          Директор
        </Typography.Paragraph>
        <Typography.Paragraph className={styles.bigText}>
          {plant?.user.name}
        </Typography.Paragraph>
        <Typography.Paragraph className={styles.smallText}>
          {plant?.user.phone || "Номер телефону не вказаний"}
        </Typography.Paragraph>
        <Typography.Paragraph className={styles.smallText}>
          {plant?.user.email || "Email не вказаний"}
        </Typography.Paragraph>
        <Typography.Paragraph
          className={styles.smallText}
          style={{ marginTop: 15 }}
        >
          Контактна особа
        </Typography.Paragraph>
        <Typography.Paragraph className={styles.bigText}>
          {plant?.contactPersonName}
        </Typography.Paragraph>
        <Typography.Paragraph className={styles.smallText}>
          {plant?.contactPersonPhone}
        </Typography.Paragraph>
        <Typography.Paragraph className={styles.smallText}>
          {plant?.contactPersonEmail}
        </Typography.Paragraph>
      </Col>
    </Row>
  );
};

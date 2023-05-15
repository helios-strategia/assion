import { FC } from "react";
import { InfoProps } from ".";
import { Col, Row, Typography } from "antd";
import styles from "../Other.module.css";

export const Info: FC<InfoProps> = (props) => {
  return (
    <Row gutter={[20, 30]}>
      <Col xs={12} md={24}>
        <Typography style={{ fontSize: "1.2rem", fontWeight: 600 }}>
          ТОВ Нікополь еліос
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
          Яригін Максим Сергійович
        </Typography.Paragraph>
        <Typography.Paragraph className={styles.smallText}>
          +38097 000 00 00
        </Typography.Paragraph>
        <Typography.Paragraph className={styles.smallText}>
          nickelios@ukr.net
        </Typography.Paragraph>
        <Typography.Paragraph
          className={styles.smallText}
          style={{ marginTop: 15 }}
        >
          Контактна особа
        </Typography.Paragraph>
        <Typography.Paragraph className={styles.bigText}>
          Яригін Максим Сергійович
        </Typography.Paragraph>
        <Typography.Paragraph className={styles.smallText}>
          +38097 000 00 00
        </Typography.Paragraph>
        <Typography.Paragraph className={styles.smallText}>
          nickelios@ukr.net
        </Typography.Paragraph>
      </Col>
    </Row>
  );
};

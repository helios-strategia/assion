import { FC } from "react";
import { PersonalProps } from ".";
import { Col, Progress, Row, Spin, Typography, theme } from "antd";
import { Badge } from "../../../Badge";
import styles from "../../detail.module.css";

const PROGRESS_SIZE = 60;

export const Personal: FC<PersonalProps> = (props) => {
  return (
    <>
      <Typography style={{ fontWeight: 600, marginBottom: 20 }}>
        Черговий персонал
      </Typography>
      <Row>
        <Col xs={8}>
          <Typography className={styles.bigText}>Сидор І.М.</Typography>
          <Typography.Paragraph className={styles.smallText}>
            єлектромонтер
          </Typography.Paragraph>
          <Typography className={styles.bigText}>Сидор І.М.</Typography>
          <Typography.Paragraph className={styles.smallText}>
            єлектромонтер
          </Typography.Paragraph>
        </Col>
        <Col xs={16}>
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-around",
                flex: 1,
                border: "2px solid #ddd",
                borderRadius: 40,
                padding: 10,
              }}
            >
              <Typography.Text className={styles.bigText}>
                Сидор В.С.
              </Typography.Text>
              <div>
                <Typography style={{ color: "#555" }}>Управник ФЕС</Typography>
                <Typography style={{ color: "#555" }}>+380930000000</Typography>
              </div>
            </div>
          </div>
        </Col>
        <Col xs={24}>
          <Typography.Paragraph
            className={styles.bigText}
            style={{ marginTop: 15 }}
          >
            Персонал виконує роботу
          </Typography.Paragraph>
          <Row>
            <Col xs={12}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 30,
                  height: "100%",
                }}
              >
                <Progress
                  type="circle"
                  percent={75}
                  size={PROGRESS_SIZE}
                  status={"active"}
                  strokeWidth={8}
                  strokeColor={"rgb(252,188,78)"}
                />
                <Typography>Огляд цілістності станції</Typography>
              </div>
            </Col>
            <Col xs={12}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 30,
                  height: "100%",
                }}
              >
                <Progress
                  type="circle"
                  percent={55}
                  size={PROGRESS_SIZE}
                  status={"active"}
                  strokeWidth={8}
                  strokeColor={"rgb(252,188,78)"}
                />
                <Row>
                  <Col xs={12}>
                    <Badge title="Початок робіт">
                      <strong>
                        <small>
                          <time>01.06.2022</time>
                        </small>
                      </strong>
                    </Badge>
                  </Col>
                  <Col xs={12}>
                    <Badge title="Кінець робіт">
                      <strong>
                        <small>
                          <time>01.06.2022</time>
                        </small>
                      </strong>
                    </Badge>
                  </Col>
                  <Col xs={24}>
                    <span style={{ fontSize: "0.7rem", lineHeight: 0.7 }}>
                      Скошування трави на території обʼєкту
                    </span>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

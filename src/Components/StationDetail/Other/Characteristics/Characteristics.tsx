import { FC, useState } from "react";
import { CharacteristicsProps } from ".";
import { Col, Row, Space, Typography } from "antd";
import styles from "./Characteristics.module.css";
import { Badge } from "../../../Badge";
import { LinkOutlined, PictureFilled, LayoutFilled } from "@ant-design/icons";
import { GalleryModal } from "../../../GalleryModal";
export const Characteristics: FC<CharacteristicsProps> = (props) => {
  const [openModalGallery, setOpenModalGallery] = useState<boolean>(false);

  function showGallery() {
    setOpenModalGallery(true);
  }

  function hideGallery() {
    setOpenModalGallery(false);
  }

  return (
    <div>
      <Typography style={{ fontSize: "1.2rem", fontWeight: 600 }}>
        Технічні Характеристики ФЕС
      </Typography>
      <Row style={{ marginTop: 20 }} gutter={[20, 10]}>
        <Col xs={6}>
          <Typography.Paragraph className={styles.smallText}>
            Потужність AC:
          </Typography.Paragraph>
          <Typography.Paragraph className={styles.bigText}>
            9.9 МВт
          </Typography.Paragraph>
        </Col>
        <Col xs={6}>
          <Typography.Paragraph className={styles.smallText}>
            Потужність DC:
          </Typography.Paragraph>
          <Typography.Paragraph className={styles.bigText}>
            12.2 МВт
          </Typography.Paragraph>
        </Col>
        <Col xs={12}>
          <Typography.Paragraph className={styles.smallText}>
            Код системи АСКОЕ:
          </Typography.Paragraph>
          <Typography.Paragraph className={styles.bigText}>
            42028348
          </Typography.Paragraph>
        </Col>
        <Col xs={6}>
          <Typography.Paragraph className={styles.smallText}>
            Площа:
          </Typography.Paragraph>
          <Typography.Paragraph className={styles.bigText}>
            9.9 МВт
          </Typography.Paragraph>
        </Col>
        <Col xs={6}>
          <Typography.Paragraph className={styles.smallText}>
            Початок єксплуатації:
          </Typography.Paragraph>
          <Typography.Paragraph className={styles.bigText}>
            12.2 МВт
          </Typography.Paragraph>
        </Col>
        <Col xs={12}>
          <div className={styles.badgesWrapper}>
            <Badge style={{ color: "#fff", padding: "0px 15px" }} filled>
              Ген план
              <LayoutFilled style={{ marginLeft: 5 }} />
            </Badge>
            <Badge
              onClick={showGallery}
              style={{ color: "#fff", padding: "0px 15px", cursor: "pointer" }}
              filled
            >
              Фото ФЕС
              <PictureFilled style={{ marginLeft: 5 }} />
            </Badge>
          </div>
        </Col>
      </Row>

      <Typography className={styles.bigText} style={{ margin: "20px 0 10px" }}>
        Обладнання
      </Typography>

      <Typography className={styles.smallText}>Сонячні модулі</Typography>
      <Row gutter={[5, 5]}>
        <Col xs={8}>
          <div className={styles.filled}>
            <LinkOutlined className={styles.link} />
            <p className={styles.equipment}>JA Solar</p>
            <p className={styles.equipment}>JAP72509-335/SC</p>
          </div>
        </Col>
        <Col xs={4}>
          <div className={styles.filled}>
            <p className={styles.equipment}>12558 шт.</p>
          </div>
        </Col>
        <Col xs={8}>
          <div className={styles.filled}>
            <p className={styles.equipment}>JA Solar</p>
            <p className={styles.equipment}>JAP72509-335/SC</p>
          </div>
        </Col>
        <Col xs={4}>
          <div className={styles.filled}>
            <p className={styles.equipment}>12558 шт.</p>
          </div>
        </Col>
      </Row>

      <Typography className={styles.smallText}>Інвентори</Typography>
      <Row gutter={[5, 5]}>
        <Col xs={8}>
          <div className={styles.filled}>
            <p className={styles.equipment}>SMA</p>
            <p className={styles.equipment}>SHP Peak 150-20</p>
          </div>
        </Col>
        <Col xs={4}>
          <div className={styles.filled}>
            <p className={styles.equipment}>66 шт.</p>
          </div>
        </Col>
        <Col xs={8}>
          <div className={styles.filled}>
            <p className={styles.equipment}></p>
            <p className={styles.equipment}></p>
          </div>
        </Col>
        <Col xs={4}>
          <div className={styles.filled}>
            <p className={styles.equipment}></p>
          </div>
        </Col>
      </Row>

      <Typography className={styles.smallText}>
        Трансформаторні підстанції
      </Typography>
      <Row gutter={[5, 5]}>
        <Col xs={8}>
          <div className={styles.filled}>
            <p className={styles.equipment}>JA Solar</p>
            <p className={styles.equipment}>JAP72509-335/SC</p>
          </div>
        </Col>
        <Col xs={4}>
          <div className={styles.filled}>
            <p className={styles.equipment}>12558 шт.</p>
          </div>
        </Col>
        <Col xs={8}>
          <div className={styles.filled}>
            <p className={styles.equipment}>JA Solar</p>
            <p className={styles.equipment}>JAP72509-335/SC</p>
          </div>
        </Col>
        <Col xs={4}>
          <div className={styles.filled}>
            <p className={styles.equipment}>12558 шт.</p>
          </div>
        </Col>
      </Row>

      <Typography className={styles.smallText}>Металоконструкції</Typography>
      <Row gutter={[5, 5]}>
        <Col xs={12}>
          <div className={styles.filled}>
            <p className={styles.equipment}>4х рядні.</p>
            <p className={styles.equipment}>Горизонтально орієнтовані</p>
          </div>
        </Col>
      </Row>
      <GalleryModal open={openModalGallery} hideModal={hideGallery} />
    </div>
  );
};

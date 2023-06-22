import React, { FC, useContext, useEffect, useState } from "react";
import { CharacteristicsProps } from ".";
import { Col, Divider, Row, Space, Typography } from "antd";
import styles from "./Characteristics.module.css";
import { Badge } from "../../../Badge";
import { LinkOutlined, PictureFilled, LayoutFilled } from "@ant-design/icons";
import { GalleryModal } from "../../../GalleryModal";
import { PlantContext } from "../../../../Pages/CurrentStation";
import dayjs, { Dayjs } from "dayjs";
export const Characteristics: FC<CharacteristicsProps> = (props) => {
  const [openModalGallery, setOpenModalGallery] = useState<boolean>(false);

  const plant = useContext(PlantContext);

  const [equipments, setEquipments] = useState<
    Record<string, { name: string; docs: any[] }>
  >({});

  useEffect(() => {
    const data: Record<string, { name: string; docs: any[] }> = {
      PLANTMODULES: {
        name: "Сонячні модулі",
        docs: [],
      },
      KTP: {
        name: "Трансформаторні підстанції",
        docs: [],
      },
      INVERTERS: {
        name: "Інвентори",
        docs: [],
      },
      OTHER: {
        name: "Інші",
        docs: [],
      },
    };
    console.log(plant);

    plant?.documents.forEach((doc) => {
      data[doc.documentType].docs.push(doc);
    });

    setEquipments(data);
  }, []);

  function showGallery() {
    setOpenModalGallery(true);
  }

  function hideGallery() {
    setOpenModalGallery(false);
  }
  console.log(equipments);
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
            {plant?.acPower} МВт
          </Typography.Paragraph>
        </Col>
        <Col xs={6}>
          <Typography.Paragraph className={styles.smallText}>
            Потужність DC:
          </Typography.Paragraph>
          <Typography.Paragraph className={styles.bigText}>
            {plant?.dcPower} МВт
          </Typography.Paragraph>
        </Col>
        <Col xs={12}>
          <Typography.Paragraph className={styles.smallText}>
            Код системи АСКОЕ:
          </Typography.Paragraph>
          <Typography.Paragraph className={styles.bigText}>
            {plant?.ascmePlantCode}
          </Typography.Paragraph>
        </Col>
        <Col xs={6}>
          <Typography.Paragraph className={styles.smallText}>
            Площа:
          </Typography.Paragraph>
          <Typography.Paragraph className={styles.bigText}>
            {plant?.area}
          </Typography.Paragraph>
        </Col>
        <Col xs={6}>
          <Typography.Paragraph className={styles.smallText}>
            Початок єксплуатації:
          </Typography.Paragraph>
          <Typography.Paragraph className={styles.bigText}>
            {dayjs(plant?.exploitationStart).format("DD.MM.YYYY HH:mm")}
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

      {Object.values(equipments).map((document) => {
        return (
          <React.Fragment key={document.name}>
            <Typography>{document.name}</Typography>
            <Row gutter={[5, 5]}>
              {document.docs.length ? (
                <>
                  {document.docs.map((doc) => {
                    return (
                      <Col xs={12} key={doc.id}>
                        <Row gutter={[5, 5]}>
                          <Col xs={16}>
                            <div className={styles.filled}>
                              <p className={styles.equipment}>{doc.name}</p>
                            </div>
                          </Col>
                          <Col xs={8}>
                            <div className={styles.filled}>
                              <p className={styles.equipment}>-</p>
                            </div>
                          </Col>
                        </Row>
                      </Col>
                    );
                  })}
                </>
              ) : (
                <Typography.Paragraph className={styles.smallText}>
                  Відсутнье
                </Typography.Paragraph>
              )}
            </Row>
            <Divider style={{ margin: "5px 0 10px" }} />
          </React.Fragment>
        );
      })}
      <GalleryModal open={openModalGallery} hideModal={hideGallery} />
    </div>
  );
};

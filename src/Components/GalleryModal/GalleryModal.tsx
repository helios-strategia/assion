import { FC } from "react";
import { GalleryModalProps } from ".";
import { Col, Image, Modal, Row } from "antd";

export const GalleryModal: FC<GalleryModalProps> = ({ open, hideModal }) => {
  return (
    <Modal width={1200} footer={null} open={open} onCancel={hideModal}>
      <Row gutter={[40, 40]}>
        <Col xs={8}>
          <Image width={"100%"} src="https://picsum.photos/900/800" />
        </Col>
        <Col xs={8}>
          <Image width={"100%"} src="https://picsum.photos/900/800" />
        </Col>
        <Col xs={8}>
          <Image width={"100%"} src="https://picsum.photos/900/800" />
        </Col>
        <Col xs={8}>
          <Image width={"100%"} src="https://picsum.photos/900/800" />
        </Col>
      </Row>
    </Modal>
  );
};

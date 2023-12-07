import { FC } from "react";
import { PrivacyAccountProps } from ".";
import { Button, Col, Divider, Input, Row, Typography } from "antd";

export const PrivacyAccount: FC<PrivacyAccountProps> = (props) => {
  return (
    <div {...props}>
      <Row gutter={[40, 40]}>
        <Col xs={24}>
          <Typography.Paragraph>Зміна паролю</Typography.Paragraph>
        </Col>
        <Col xs={7}>
          <Input.Password placeholder="Введіть страий пароль" />
        </Col>
        <Col xs={7}>
          <Input.Password placeholder="Введіть новий пароль" />
        </Col>
        <Col xs={7}>
          <Input.Password placeholder="Підтвердіть новий пароль" />
        </Col>
        <Col xs={3}>
          <Button type="primary">Змінити пароль</Button>
        </Col>
        <Col xs={24}>
          <Divider />
        </Col>
      </Row>
    </div>
  );
};

import { UpdateUserProps } from ".";
import React, { FC, useEffect, useState } from "react";
import { Button, Form, Input, Modal, Select, theme } from "antd";
import { Role, RoleEncode } from "../../types/user";
import { log } from "console";

const { Option } = Select;

interface UserCreateFormState {
  email: string;
  name: string;
  phone: string;
  password: string;
  passwordConfirm: string;
  role: (typeof RoleEncode)[Role];
}

const initialValue: UserCreateFormState = {
  email: "",
  name: "",
  phone: "",
  password: "",
  passwordConfirm: "",
  role: RoleEncode[Role.ADMIN],
};

export const UpdateUser: FC<UpdateUserProps> = ({ open, hideModal }) => {
  const [form] = Form.useForm();

  const [formState, setFormState] = useState<any>(initialValue);

  function inputHandler(event: React.ChangeEvent<HTMLInputElement>) {
    setFormState((prev: any) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  }

  useEffect(() => {
    if (open) {
      form.setFieldsValue(open);
      setFormState(open);
    } else {
      form.resetFields();
      setFormState(initialValue);
    }
  }, [open]);

  return (
    <Modal
      title="Редагування користувача"
      open={Boolean(open)}
      onCancel={hideModal}
      footer={null}
    >
      <Form form={form}>
        <Form.Item hasFeedback name="name" rules={[{ required: true }]}>
          <Input
            name="name"
            placeholder="Імʼя"
            onChange={inputHandler}
            value={formState.name}
          />
        </Form.Item>
        <Form.Item hasFeedback name="email" rules={[{ required: true }]}>
          <Input
            placeholder="Email"
            onChange={inputHandler}
            value={formState.email}
          />
        </Form.Item>
        <Form.Item hasFeedback name="phone" rules={[{ required: true }]}>
          <Input
            placeholder="Телефон"
            onChange={inputHandler}
            value={formState.phone}
          />
        </Form.Item>
        <Form.Item
          hasFeedback
          name="role"
          rules={[{ required: true, message: "Please select your country!" }]}
        >
          <Select placeholder="Роль">
            <Option value={RoleEncode[Role.ADMIN]}>{Role.ADMIN}</Option>
            <Option value={RoleEncode[Role.CLIENT]}>{Role.CLIENT}</Option>
          </Select>
        </Form.Item>
        <Form.Item hasFeedback>
          <Button htmlType="submit" style={{ width: "100%" }} type="primary">
            Оновити данні{" "}
          </Button>
        </Form.Item>
      </Form>
      <Form>
        <Form.Item hasFeedback name="password" rules={[{ required: true }]}>
          <Input
            placeholder="Пароль"
            type="password"
            onChange={inputHandler}
            value={formState.password}
          />
        </Form.Item>
        <Form.Item
          hasFeedback
          name="passwordConfirm"
          rules={[{ required: true }]}
        >
          <Input
            placeholder="Підтвердження паролю"
            type="password"
            onChange={inputHandler}
            value={formState.passwordConfirm}
          />
        </Form.Item>
        <Form.Item hasFeedback>
          <Button htmlType="submit" style={{ width: "100%" }} type="primary">
            Оновити данні{" "}
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

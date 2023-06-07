import React, { FC, useState } from "react";
import { CreateUserProps } from ".";
import {
  Button,
  Form,
  Input,
  Modal,
  Select,
  Upload,
  message,
  theme,
} from "antd";
import { Role, RoleEncode } from "../../types/user";
import styles from "./CreateUser.module.css";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import type { UploadChangeParam } from "antd/es/upload";
import type { RcFile, UploadFile, UploadProps } from "antd/es/upload/interface";
import { useCreateUser } from "./api.create.user";

const getBase64 = (img: RcFile, callback: (url: string) => void) => {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result as string));
  reader.readAsDataURL(img);
};

const beforeUpload = (file: RcFile) => {
  const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
  if (!isJpgOrPng) {
    message.error("You can only upload JPG/PNG file!");
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error("Image must smaller than 2MB!");
  }
  return isJpgOrPng && isLt2M;
};

const { Option } = Select;

export interface UserCreateFormState {
  email: string;
  name: string;
  phone: string;
  password: string;
  passwordConfirm: string;
  role: (typeof RoleEncode)[Role];
  avatar?: any;
}

const initialValue: UserCreateFormState = {
  email: "",
  name: "",
  phone: "",
  password: "",
  passwordConfirm: "",
  role: RoleEncode[Role.ADMIN],
  avatar: "",
};

export const CreateUser: FC<CreateUserProps> = ({ open, hideModal }) => {
  const {
    token: { colorPrimary },
  } = theme.useToken();

  const { loadingUCreateUser, fetchCreateUser } = useCreateUser();

  const [formState, setFormState] = useState<UserCreateFormState>(initialValue);

  function inputHandler(event: React.ChangeEvent<HTMLInputElement>) {
    setFormState((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  }

  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState<string>();

  const handleChange: UploadProps["onChange"] = (
    info: UploadChangeParam<UploadFile>
  ) => {
    if (info.file.status === "uploading") {
      setLoading(true);
      return;
    }
    if (info.file.status === "done") {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj as RcFile, (url) => {
        setLoading(false);
        setImageUrl(url);
      });
    }
  };

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Додати Аватар</div>
    </div>
  );

  async function onFinish(values: UserCreateFormState) {
    await fetchCreateUser(values);

    hideModal();
  }

  return (
    <Modal
      title="Додати користувача"
      open={open}
      onCancel={hideModal}
      footer={null}
    >
      <Form
        disabled={loadingUCreateUser}
        className={styles.formWrapper}
        onFinish={onFinish}
      >
        <Form.Item
          hasFeedback
          name="avatar"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <Upload
            name="avatar"
            listType="picture-circle"
            className="avatar-uploader"
            showUploadList={false}
            //action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            beforeUpload={beforeUpload}
            onChange={handleChange}
          >
            {imageUrl ? (
              <img src={imageUrl} alt="avatar" style={{ width: "100%" }} />
            ) : (
              uploadButton
            )}
          </Upload>
        </Form.Item>

        <Form.Item hasFeedback name="name" rules={[{ required: true }]}>
          <Input
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
        <Form.Item
          hasFeedback
          name="password"
          rules={[
            {
              required: true,
              min: 8,
              message: "Мінімальна кількість символів - 8",
            },
          ]}
        >
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
          rules={[
            { required: true },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error("Вказані паролі не однакові"));
              },
            }),
          ]}
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
            Додати користувача
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

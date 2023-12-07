import { UpdateUserProps } from ".";
import React, { FC, useEffect, useState } from "react";
import {
  Avatar,
  Button,
  Form,
  Input,
  Modal,
  Select,
  Upload,
  message,
  theme,
} from "antd";
import { Role, RoleEncode, User } from "../../types/user";
import { log } from "console";
import { useAllUsers } from "../../Pages/Users/api.users";
import {
  RcFile,
  UploadChangeParam,
  UploadFile,
  UploadProps,
} from "antd/es/upload";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { ObjectFlags } from "typescript";

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
  const { fetchEditUser } = useAllUsers();
  const [formState, setFormState] = useState<any>(initialValue);

  const [loading, setLoading] = useState(false);
  const [file64, setFile64] = useState<string>("");
  const [avatarFile, setAvatarFile] = useState<any>();

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
      setFile64("");
    }
  }, [open]);

  const customRequest = ({ file, onSuccess }: any) => {
    setTimeout(() => {
      onSuccess("ok");
    }, 0);
  };

  const handleChange: UploadProps["onChange"] = (
    info: UploadChangeParam<UploadFile>
  ) => {
    // if (info.file.status === "uploading") {
    //   setLoading(true);
    //   return;
    // }
    if (info.file.status === "done") {
      // Get this url from response in real world.
      setAvatarFile(info.file.originFileObj ?? null);
      getBase64(info.file.originFileObj as RcFile, (url) => {
        setLoading(false);
        setFile64(url);
      });
    }
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
  const getBase64 = (img: RcFile, callback: (url: string) => void) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => callback(reader.result as string));
    reader.readAsDataURL(img);
  };

  async function onFinishUser(params: User) {
    if (open) {
      const data = new FormData();

      Object.entries({ ...open, ...params }).forEach(([key, value]) => {
        data.append(key, value);
      });

      if (avatarFile) {
        data.append("avatar", avatarFile);
      }

      const res = await fetchEditUser(data, open?.id);
    }
  }

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Додати Аватар</div>
    </div>
  );
  return (
    <Modal
      title="Редагування користувача"
      open={Boolean(open)}
      onCancel={hideModal}
      footer={null}
    >
      <Form form={form} onFinish={onFinishUser}>
        <Form.Item
          hasFeedback
          style={{ display: "flex", justifyContent: "center" }}
        >
          <Upload
            listType="picture-circle"
            className="avatar-uploader"
            showUploadList={false}
            customRequest={customRequest}
            beforeUpload={beforeUpload}
            onChange={handleChange}
          >
            {file64 || formState.avatarUrl ? (
              <Avatar
                size={100}
                src={
                  file64
                    ? file64
                    : formState.avatarUrl
                    ? `http://${formState.avatarUrl}`
                    : undefined
                }
                alt="avatar"
              />
            ) : (
              uploadButton
            )}
          </Upload>
        </Form.Item>
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

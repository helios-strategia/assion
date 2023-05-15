import React, { FC, useState } from "react";
import { CreateEmplyeeProps } from ".";
import {
  Avatar,
  Button,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Modal,
  Select,
  Space,
  Upload,
  message,
  theme,
} from "antd";
import { Role, RoleEncode } from "../../types/user";
import styles from "./CreateEmployee.module.css";
import { UserOutlined, InfoCircleFilled } from "@ant-design/icons";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import type { UploadChangeParam } from "antd/es/upload";
import type { RcFile, UploadFile, UploadProps } from "antd/es/upload/interface";
import { ScheduleType } from "../../types/employee";

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

interface EmployeeCreateFormState {
  name?: string;
  surname?: string;
  phone?: string;
  avatar?: File;
  plantId?: number;
  positionId?: number;
  startWorkDateTime?: Date;
  workHoursAmount?: number;
  scheduleType?: ScheduleType;
  restHoursAmount?: number;
  vacations?: [Date, Date];
  submit?: any;
}

const initialValue: EmployeeCreateFormState = {
  name: "",
  surname: "",
  phone: "",
  avatar: undefined,
  plantId: undefined,
  startWorkDateTime: undefined,
  workHoursAmount: undefined,
  scheduleType: undefined,
  restHoursAmount: undefined,
  vacations: undefined, //[undefined, undefined],
  positionId: undefined,
  submit: null,
};

export const CreateEmplyee: FC<CreateEmplyeeProps> = ({ open, hideModal }) => {
  const {
    token: { colorPrimary },
  } = theme.useToken();

  const [formState, setFormState] =
    useState<EmployeeCreateFormState>(initialValue);

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

  return (
    <Modal
      title="Додати користувача"
      open={open}
      onCancel={hideModal}
      footer={null}
    >
      <Form className={styles.formWrapper}>
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

        <Form.Item hasFeedback name="phone" rules={[{ required: true }]}>
          <Input
            type="tel"
            placeholder="Телефон"
            onChange={inputHandler}
            value={formState.phone}
          />
        </Form.Item>
        <Form.Item
          hasFeedback
          name="station"
          rules={[{ required: true, message: "Please select your country!" }]}
        >
          <Select placeholder="Станція">
            <Option value={1}>Перша</Option>
            <Option value={2}>Друга</Option>
          </Select>
        </Form.Item>
        <Form.Item
          hasFeedback
          name="posit"
          rules={[{ required: true, message: "Please select your country!" }]}
        >
          <Select placeholder="Посада">
            <Option value={RoleEncode[Role.ADMIN]}>{Role.ADMIN}</Option>
            <Option value={RoleEncode[Role.CLIENT]}>{Role.CLIENT}</Option>
          </Select>
        </Form.Item>
        <Form.Item
          hasFeedback
          name="posit"
          rules={[{ required: true, message: "Please select your country!" }]}
        >
          <Select placeholder="Тип графіку">
            <Option value={1}>Позміннмй</Option>
            <Option value={2}>Пʼятиденний</Option>
          </Select>
        </Form.Item>
        <Form.Item
          hasFeedback
          name="posit"
          rules={[{ required: true, message: "Please select your country!" }]}
        >
          <DatePicker placeholder="Початок роботи" style={{ width: "100%" }} />
        </Form.Item>
        <Space direction="horizontal">
          <Form.Item
            hasFeedback
            name="workHoursAmount"
            rules={[{ required: true }]}
          >
            <Input
              type="number"
              placeholder="Робочих годин"
              onChange={inputHandler}
              value={formState.workHoursAmount}
            />
          </Form.Item>
          <Form.Item
            hasFeedback
            name="restHoursAmount"
            rules={[{ required: true }]}
          >
            <Input
              type="number"
              placeholder="Неробочіх годин"
              onChange={inputHandler}
              value={formState.restHoursAmount}
            />
          </Form.Item>
        </Space>

        <Form.Item hasFeedback>
          <Button htmlType="submit" style={{ width: "100%" }} type="primary">
            Додати користувача
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

import { FC } from "react";
import { CreateStationProps } from ".";
import {
  Card,
  Col,
  Collapse,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Row,
  Select,
  Space,
  Typography,
  Upload,
  message,
  theme,
} from "antd";
import { Helmet } from "react-helmet";
import { BASE_APP_NAME } from "../../consts";
import { PlanMap } from "../../Components/StationDetail/Other/Map";
import { Status } from "../../types/plant";
import {
  InboxOutlined,
  PlusCircleFilled,
  PlayCircleTwoTone,
} from "@ant-design/icons";
import { UploadProps } from "antd/lib/upload/interface";

const { Dragger } = Upload;

const propsUpload: UploadProps = {
  name: "file",
  multiple: true,
  action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
  onChange(info) {
    const { status } = info.file;
    if (status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (status === "done") {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
  onDrop(e) {
    console.log("Dropped files", e.dataTransfer.files);
  },
};

export const CreateStation: FC<CreateStationProps> = (props) => {
  const {
    token: { colorPrimary },
  } = theme.useToken();

  return (
    <>
      <Helmet>
        <title>{BASE_APP_NAME} | Створити нову станцію</title>
      </Helmet>
      <div {...props}>
        <Typography.Title>Створити нову станцію</Typography.Title>
        <Form style={{ width: 600, margin: "auto" }}>
          <Form.Item name="name" rules={[{ required: true }]}>
            <Input placeholder="Назва станції" />
          </Form.Item>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Form.Item name="name" rules={[{ required: true }]}>
              <Input placeholder="Широта" />
            </Form.Item>
            <Form.Item name="name" rules={[{ required: true }]}>
              <Input placeholder="Довгота" />
            </Form.Item>
          </div>
          <Collapse>
            <Collapse.Panel header="Мапа" key="1">
              <PlanMap />
            </Collapse.Panel>
          </Collapse>
          <Form.Item name="name" rules={[{ required: true }]}>
            <Input placeholder="Код станції АСКУЕ" />
          </Form.Item>
          <Form.Item>
            <Select placeholder="Статус роботи станції">
              {Object.entries(Status).map(([key, value]) => (
                <Select.Option key={key} value={value}>
                  {value}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item>
            <Dragger {...propsUpload}>
              <p className="ant-upload-drag-icon">
                <InboxOutlined />
              </p>
              <p className="ant-upload-text">Головний план станції</p>
              <p className="ant-upload-hint">Обрати файл зі свого компьютера</p>
            </Dragger>
          </Form.Item>
          <Form.Item>
            <DatePicker
              placeholder="Дата початку єксплуатації"
              style={{ width: "100%" }}
            />
          </Form.Item>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Form.Item name="name" rules={[{ required: true }]}>
              <InputNumber
                style={{ width: "100%" }}
                placeholder="Потужність змінного струму (Вихідна потужність)"
              />
            </Form.Item>
            <Form.Item name="name" rules={[{ required: true }]}>
              <InputNumber
                style={{ width: "100%" }}
                placeholder="Потужність постійного струму (Вхідна потужність)"
              />
            </Form.Item>
          </div>
          <Form.Item name="owner" rules={[{ required: true }]}>
            <Input style={{ width: "100%" }} placeholder="Власник" />
          </Form.Item>
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <Collapse>
              <Collapse.Panel header="Сонячні модулі" key="1">
                <Row gutter={[20, 20]}>
                  <Col xs={8}>
                    <Space direction="vertical">
                      <Input />
                      <Dragger {...propsUpload}>
                        <p className="ant-upload-drag-icon">
                          <InboxOutlined />
                        </p>
                        <p className="ant-upload-hint">
                          Обрати файл зі свого компьютера
                        </p>
                      </Dragger>
                    </Space>
                  </Col>
                  <Col xs={8}>
                    <Card
                      style={{
                        height: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        cursor: "pointer",
                      }}
                    >
                      <PlusCircleFilled
                        style={{
                          color: colorPrimary,
                          fontSize: 30,
                        }}
                      />
                    </Card>
                  </Col>
                </Row>
              </Collapse.Panel>
            </Collapse>
            <Collapse>
              <Collapse.Panel header="Інвертори" key="1">
                <Row gutter={[20, 20]}>
                  <Col xs={8}>
                    <Space direction="vertical">
                      <Input />
                      <Dragger {...propsUpload}>
                        <p className="ant-upload-drag-icon">
                          <InboxOutlined />
                        </p>
                        <p className="ant-upload-hint">
                          Обрати файл зі свого компьютера
                        </p>
                      </Dragger>
                    </Space>
                  </Col>
                  <Col xs={8}>
                    <Card
                      style={{
                        height: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        cursor: "pointer",
                      }}
                    >
                      <PlusCircleFilled
                        style={{
                          color: colorPrimary,
                          fontSize: 30,
                        }}
                      />
                    </Card>
                  </Col>
                </Row>
              </Collapse.Panel>
            </Collapse>
            <Collapse>
              <Collapse.Panel header="Трансформаторні підстанції" key="1">
                <Row gutter={[20, 20]}>
                  <Col xs={8}>
                    <Space direction="vertical">
                      <Input />
                      <Dragger {...propsUpload}>
                        <p className="ant-upload-drag-icon">
                          <InboxOutlined />
                        </p>
                        <p className="ant-upload-hint">
                          Обрати файл зі свого компьютера
                        </p>
                      </Dragger>
                    </Space>
                  </Col>
                  <Col xs={8}>
                    <Card
                      style={{
                        height: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        cursor: "pointer",
                      }}
                    >
                      <PlusCircleFilled
                        style={{
                          color: colorPrimary,
                          fontSize: 30,
                        }}
                      />
                    </Card>
                  </Col>
                </Row>
              </Collapse.Panel>
            </Collapse>
          </div>
        </Form>
      </div>
    </>
  );
};

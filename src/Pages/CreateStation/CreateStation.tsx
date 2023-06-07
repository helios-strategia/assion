import { FC, useState } from "react";
import { CreateStationProps } from ".";
import {
  Button,
  Collapse,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Select,
  Typography,
  Upload,
  message,
  theme,
} from "antd";
import { Helmet } from "react-helmet";
import { BASE_APP_NAME } from "../../consts";
import { PlanMap } from "../../Components/StationDetail/Other/Map";
import { Status } from "../../types/plant";

import { UploadProps } from "antd/lib/upload/interface";
import { UploadInput } from "../../Components/UI/UploadInput";
import { FilesCollapse } from "./FilesCollapse/FilesCollapse";
import { InboxOutlined } from "@ant-design/icons";
import { useForm } from "antd/es/form/Form";
import { HTTPMethod, useHttp } from "../../hooks/useHttp";
import dayjs from "dayjs";
import { apiURL } from "../../api/apiURL";

export type fileItem = {
  name: string;
  file: any;
};

const defFile = (): fileItem => ({
  name: "",
  file: undefined,
});

export const CreateStation: FC<CreateStationProps> = (props) => {
  const {
    baseUrl,
    station: { createStation },
  } = apiURL;

  const { request } = useHttp();

  const [plantModules, setPlantModules] = useState<fileItem[]>([defFile()]);
  const [inverters, setInverters] = useState<fileItem[]>([defFile()]);
  const [ktp, setKtp] = useState<fileItem[]>([defFile()]);
  const [masterPlan, setMasterPlan] = useState<any>();
  const [others, setOthers] = useState<fileItem[]>([defFile()]);
  const propsUploadMasterPlan: UploadProps = {
    //name: "file",
    customRequest: ({ file, onSuccess }: any) => {
      setTimeout(() => {
        onSuccess("ok");
      }, 0);
    },
    multiple: false,
    onChange(info) {
      const { status } = info.file;
      if (status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (status === "done") {
        message.success(`${info.file.name} file uploaded successfully.`);
        setMasterPlan(info.file.originFileObj);
      } else if (status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      console.log("Dropped files", e.dataTransfer.files);
    },
  };
  const [form] = useForm();

  const [locationLatitude, setLocationLatitude] = useState("0");
  const [locationLongitude, setLocationLongitude] = useState("0");

  const locationLatitudeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => setLocationLatitude(event.target.value);

  const locationLongitudeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => setLocationLongitude(event.target.value);

  const onFinish = (values: any) => {
    const data = new FormData();

    Object.keys(values).forEach((key: string) => {
      if (key === "exploitationStart") {
        values[key] = dayjs(values[key]).toISOString();
        data.append(key, values[key]);
      } else {
        data.append(key, values[key]);
      }
    });
    data.append("userId", "2");

    if (masterPlan) {
      data.append("masterPlan", masterPlan);
    }

    const docs: { [key: string]: any[] } = {
      ktp,
      plantModules,
      inverters,
      others,
    };

    Object.keys(docs).forEach((docKey) => {
      if (docs[docKey][0].file) {
        docs[docKey].forEach((fileObj) => {
          data.append("documents[]", fileObj.file, fileObj.name);
          data.append("documentTypes[]", docKey);
        });
      }
    });

    request(`${baseUrl}${createStation}`, HTTPMethod.POST, data);
  };

  const mocinit = {
    name: "Test for testt",
    locationLatitude: "34",
    locationLongitude: "44",
    ascmePlantCode: "234",
    area: "345",
    exploitationStart: dayjs("2023-06-02T13:34:31.889Z"),
    acPower: 234,
    dcPower: 456,
    contactPersonName: "Oleksandr",
    contactPersonPhone: "+380900000000",
    contactPersonEmail: "a@email.com",
    status: "ACTIVE",
  };

  return (
    <>
      <Helmet>
        <title>{BASE_APP_NAME} | Створити нову станцію</title>
      </Helmet>
      <div {...props}>
        <Typography.Title level={3}>Створити нову станцію</Typography.Title>
        <Form
          initialValues={mocinit}
          form={form}
          style={{ width: 600, margin: "auto" }}
          onFinish={onFinish}
        >
          <Form.Item name="name" rules={[{ required: true }]}>
            <Input placeholder="Назва станції" />
          </Form.Item>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Form.Item name="locationLatitude" rules={[{ required: true }]}>
              <Input
                placeholder="Широта"
                value={locationLatitude}
                onChange={locationLatitudeHandler}
              />
            </Form.Item>
            <Form.Item name="locationLongitude" rules={[{ required: true }]}>
              <Input
                placeholder="Довгота"
                value={locationLongitude}
                onChange={locationLongitudeHandler}
              />
            </Form.Item>
          </div>
          <Form.Item>
            <Collapse>
              <Collapse.Panel header="Мапа" key="1">
                <PlanMap lat={+locationLatitude} lng={+locationLongitude} />
              </Collapse.Panel>
            </Collapse>
          </Form.Item>
          <Form.Item name="ascmePlantCode" rules={[{ required: true }]}>
            <Input placeholder="Код станції АСКУЕ" />
          </Form.Item>
          <Form.Item name="area" rules={[{ required: true }]}>
            <Input placeholder="Площа" />
          </Form.Item>
          <Form.Item name="status">
            <Select placeholder="Статус роботи станції">
              {Object.entries(Status).map(([key, value]) => {
                return (
                  <Select.Option key={key} value={key}>
                    {value}
                  </Select.Option>
                );
              })}
            </Select>
          </Form.Item>
          <Form.Item>
            <Upload.Dragger {...propsUploadMasterPlan}>
              <Typography.Paragraph>План станції </Typography.Paragraph>
              <InboxOutlined
                style={{
                  fontSize: "3rem",
                  fontWeight: 600,
                  color: "rgb(252,188,78)",
                }}
              />
              <Typography.Paragraph>
                Обрати файл з вашого компьютера
              </Typography.Paragraph>
            </Upload.Dragger>
          </Form.Item>
          <Form.Item name="exploitationStart" required>
            <DatePicker
              placeholder="Дата початку єксплуатації"
              style={{ width: "100%" }}
              format="DD.MM.YYYY"
            />
          </Form.Item>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Form.Item name="acPower" rules={[{ required: true }]}>
              <InputNumber
                style={{ width: "100%" }}
                placeholder="Потужність змінного струму (Вихідна потужність)"
              />
            </Form.Item>
            <Form.Item name="dcPower" rules={[{ required: true }]}>
              <InputNumber
                style={{ width: "100%" }}
                placeholder="Потужність постійного струму (Вхідна потужність)"
              />
            </Form.Item>
          </div>
          <Form.Item name="contactPersonName" rules={[{ required: true }]}>
            <Input style={{ width: "100%" }} placeholder="Контактна особоа" />
          </Form.Item>
          <Form.Item name="contactPersonPhone" rules={[{ required: true }]}>
            <Input
              style={{ width: "100%" }}
              placeholder="Номер телефону контантної особи"
            />
          </Form.Item>
          <Form.Item name="contactPersonEmail" rules={[{ required: true }]}>
            <Input
              style={{ width: "100%" }}
              placeholder="Email контактної особи"
            />
          </Form.Item>
          <Form.Item>
            <Button htmlType="submit">Створити Станцію</Button>
          </Form.Item>
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <FilesCollapse
              files={plantModules}
              filesHandler={setPlantModules}
              title="Сонячні модулі"
            />
            <FilesCollapse
              files={inverters}
              filesHandler={setInverters}
              title="Інвертори"
            />
            <FilesCollapse
              files={ktp}
              filesHandler={setKtp}
              title="Трансформаторні підстанції"
            />
            <FilesCollapse
              files={others}
              filesHandler={setOthers}
              title="Інші"
            />
          </div>
        </Form>
      </div>
    </>
  );
};

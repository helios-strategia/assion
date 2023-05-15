import { CrashModalProps } from ".";
import { FC, useState } from "react";
import {
  Modal,
  Radio,
  RadioChangeEvent,
  DatePicker,
  Upload,
  Input,
} from "antd";
import TextArea from "antd/es/input/TextArea";
import { PlusCircleFilled } from "@ant-design/icons";

import type { RcFile, UploadProps } from "antd/es/upload";
import type { UploadFile } from "antd/es/upload/interface";

const getBase64 = (file: RcFile): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });
const { RangePicker } = DatePicker;

const options = [
  { label: "Впливають на генерацію", value: "Apple" },
  { label: "Не впливають на генерацію", value: "Pear" },
];

export const CrashModal: FC<CrashModalProps> = ({ open, setOpen }) => {
  const [eventName, setEventName] = useState("Apple");
  const onChange3 = ({ target: { value } }: RadioChangeEvent) => {
    console.log("radio3 checked", value);
    setEventName(value);
  };
  function closeModal() {
    setOpen(false);
  }
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [previewTitle, setPreviewTitle] = useState("");
  const [fileList, setFileList] = useState<UploadFile[]>([]);

  const handleCancel = () => setPreviewOpen(false);

  const handlePreview = async (file: UploadFile) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj as RcFile);
    }

    setPreviewImage(file.url || (file.preview as string));
    setPreviewOpen(true);
    setPreviewTitle(
      file.name || file.url!.substring(file.url!.lastIndexOf("/") + 1)
    );
  };

  const handleChange: UploadProps["onChange"] = ({ fileList: newFileList }) =>
    setFileList(newFileList);

  return (
    <Modal
      title="Нова аварія"
      open={open}
      onCancel={closeModal}
      okText="Зберегти"
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        <Input placeholder="Вкажіть назву події" />

        <RangePicker showTime />
        <TextArea placeholder="Опис дефекту та пояснення" rows={5} />
        <TextArea placeholder="Опис специфікація обладнання" rows={5} />
        <Radio.Group
          options={options}
          onChange={onChange3}
          value={eventName}
          optionType="button"
        />
        <Upload
          listType="picture-card"
          fileList={fileList}
          onPreview={handlePreview}
          onChange={handleChange}
        >
          {fileList.length >= 8 ? null : (
            <div>
              <PlusCircleFilled style={{ fontSize: 20 }} />
              <div>
                <small>Додати зображення</small>
              </div>
            </div>
          )}
        </Upload>
        <Modal
          open={previewOpen}
          title={previewTitle}
          footer={null}
          onCancel={handleCancel}
        >
          <img alt="example" style={{ width: "100%" }} src={previewImage} />
        </Modal>
      </div>
    </Modal>
  );
};

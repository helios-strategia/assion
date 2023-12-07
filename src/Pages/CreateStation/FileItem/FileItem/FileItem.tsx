import { FC, useState } from "react";
import { FileItemProps } from ".";
import { Col, Image, Input, Space, Typography, Upload, message } from "antd";
import { InboxOutlined, LoadingOutlined } from "@ant-design/icons";
import {
  RcFile,
  UploadChangeParam,
  UploadFile,
  UploadProps,
} from "antd/es/upload";

const getBase64 = (img: RcFile, callback: (url: string) => void) => {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result as string));
  reader.readAsDataURL(img);
};

const beforeUpload = (file: RcFile) => {
  const isJpgOrPng =
    file.type === "image/jpeg" ||
    file.type === "image/png" ||
    file.type === "application/pdf";
  if (!isJpgOrPng) {
    message.error("You can only upload JPG/PNG/DPF file!");
  }
  const isLt2M = file.size / 1024 / 1024 < 10;
  if (!isLt2M) {
    message.error("Image must smaller than 10MB!");
  }
  return isJpgOrPng && isLt2M;
};

export const FileItem: FC<FileItemProps> = ({
  index,
  fileHandler,
  fileNameHanler,
  module,
}) => {
  const [loadingFile, setLoadingFile] = useState(false);

  const [imageUrl, setImageUrl] = useState("");

  const dummyRequest = ({ file, onSuccess }: any) => {
    setTimeout(() => {
      onSuccess("ok");
    }, 0);
  };

  const setLoadingFileHandler: UploadProps["onChange"] = (
    info: UploadChangeParam<UploadFile>
  ) => {
    if (info.file.status === "error") {
      console.error(info);
    }

    if (info.file.status === "done") {
      getBase64(info.file.originFileObj as RcFile, (url: any) => {
        setImageUrl(url);
      });
      fileHandler(info.file.originFileObj, index);
    }
  };

  return (
    <Col xs={8} key={index}>
      <Space direction="vertical">
        <Input
          onChange={(event) => fileNameHanler(event.target.value, index)}
          value={module.name}
        />

        {imageUrl ? (
          <Image
            src={imageUrl}
            alt="avatar"
            style={{ width: "100%" }}
            preview
          />
        ) : (
          <div style={{ height: "100%" }}>
            {loadingFile ? (
              <LoadingOutlined />
            ) : (
              <Upload.Dragger
                beforeUpload={beforeUpload}
                customRequest={dummyRequest}
                name="file"
                multiple={false}
                showUploadList={false}
                onChange={setLoadingFileHandler}
              >
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
            )}
          </div>
        )}
      </Space>
    </Col>
  );
};

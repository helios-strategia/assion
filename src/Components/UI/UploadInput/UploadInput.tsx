import { FC, useMemo } from "react";
import { UploadInputProps } from ".";
import styles from "./upload.module.css";
import { InboxOutlined } from "@ant-design/icons";
import { Typography } from "antd";

function uuidv4(): string {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

export const UploadInput: FC<UploadInputProps> = (props) => {
  const id = useMemo(uuidv4, []);

  return (
    <label htmlFor={id} className={styles.uploadWrapper}>
      <InboxOutlined
        style={{
          fontSize: "3rem",
          fontWeight: 600,
          color: "rgb(252,188,78)",
        }}
      />
      <Typography.Text>Обрати файл з вашого компьютера</Typography.Text>
      <input
        id={id}
        className={styles.upload}
        type="file"
        multiple={false}
        {...props}
      ></input>
    </label>
  );
};

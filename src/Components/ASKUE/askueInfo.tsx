import { ReactNode, useState } from "react";
import styles from "./askue.module.css";
import { Popover, theme } from "antd";
import {
  InfoCircleFilled,
  LeftOutlined,
  RightOutlined,
} from "@ant-design/icons";
export type InfoItem = {
  color: string;
  text: string;
  title: string;
};

const Slider = ({ arr }: { arr: { title: string; text: string }[] }) => {
  const [showIndex, setShowIndex] = useState<number>(0);
  const increment = () => {
    if (showIndex === arr.length - 1) {
      setShowIndex(0);
    } else {
      setShowIndex((prev) => (prev += 1));
    }
  };
  const decrement = () => {
    if (showIndex === 0) {
      setShowIndex(arr.length - 1);
    } else {
      setShowIndex((prev) => (prev -= 1));
    }
  };
  return (
    <div style={{ width: 120 }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <LeftOutlined onClick={decrement} />
        {arr[showIndex].title}
        <RightOutlined onClick={increment} />
      </div>
      <p>{arr[showIndex].text}</p>
    </div>
  );
};

export const ASKUEInfo = ({
  infoData,
  postChildren,
}: {
  infoData: InfoItem[];
  postChildren?: { title: string; text: string }[];
}): JSX.Element => {
  const {
    token: { colorPrimary },
  } = theme.useToken();

  return (
    <div className={styles.infoWrapper}>
      {infoData.map(({ text, title, color }) => {
        return (
          <div className={styles.infoItem}>
            <div
              className={styles.infoIcon}
              style={{ backgroundColor: color }}
            />{" "}
            <span title={title}>{text}</span>
          </div>
        );
      })}
      <Popover
        style={{ borderRadius: 4 }}
        placement="bottomLeft"
        content={
          <Slider
            arr={[
              { text: "test", title: "title" },
              { text: "test2", title: "title2" },
            ]}
          />
        }
        trigger="click"
      >
        <InfoCircleFilled style={{ color: colorPrimary }} />
      </Popover>
    </div>
  );
};

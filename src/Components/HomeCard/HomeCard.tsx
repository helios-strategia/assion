import { FC } from "react";
import { HomeCardProps } from ".";
import { Card } from "antd";
import styles from "./Home.module.css";
const { Meta } = Card;

export const HomeCard: FC<HomeCardProps> = (props) => {
  const { title, icon, content } = props.item;

  return (
    <Card className={styles.wrapper}>
      <Meta title={title} />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: 130,
          position: "relative",
        }}
      >
        {icon}
        {content}
      </div>
    </Card>
  );
};

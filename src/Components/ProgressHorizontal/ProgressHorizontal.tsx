import React, { FC } from "react";
import { ProgressHorizontalProps } from ".";
import styles from "./ProgressHorizontal.module.css";

export const ProgressHorizontal: FC<ProgressHorizontalProps> = ({
  percent,
}) => {
  return (
    <div className={styles.wrapper}>
      <strong className={styles.percent}>{percent}%</strong>
      <div className={styles.load} style={{ width: `${percent}%` }}></div>
    </div>
  );
};

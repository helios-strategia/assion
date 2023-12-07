import { FC } from "react";
import { BadgeProps } from ".";
import styles from "./Badge.module.css";
import classnames from "classnames";

export const Badge: FC<BadgeProps> = ({
  children,
  filled,
  title,
  ...props
}) => {
  return (
    <div className={styles.wrapper}>
      {title && (
        <>
          <p>{title}</p>
        </>
      )}
      <div
        className={classnames(styles.container, { [styles.filled]: filled })}
        {...props}
      >
        {children}
      </div>
    </div>
  );
};

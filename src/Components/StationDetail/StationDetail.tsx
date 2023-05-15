import { FC } from "react";
import { StationDetailProps } from ".";
import { Main } from "./Main";
import { Card, Divider } from "antd";
import { Other } from "./Other";

export const StationDetail: FC<StationDetailProps> = (props) => {
  return (
    <Card {...props}>
      <Main />
      <Divider />
      <Other />
    </Card>
  );
};

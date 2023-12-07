import { ReactNode } from "react";
export interface HomeCardProps {
  item: ItemCard;
}
export type ItemCard = {
  title: string;
  icon?: any;
  content?: any;
  to?: string;
};

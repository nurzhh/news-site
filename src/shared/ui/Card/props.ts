import { ReactNode } from "react";

export interface CardProps {
  className?: string;
  children?: ReactNode | string;
  imageCard: 'string';
  cardStyle: "first";
}

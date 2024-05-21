import cn from "classnames";
import { CardProps } from "./props";
import "./styles.scss";

export default function Card({
  className,
  children,
  imageCard,
  cardStyle = "first",
}: CardProps) {
  return (
    <div
      className={cn(`card__${cardStyle}`, className)}
      style={{
        backgroundImage: `url(${imageCard})`,
      }}
    >
      {children}
    </div>
  );
}

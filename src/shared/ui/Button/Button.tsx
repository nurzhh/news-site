import { ReactNode } from "react";
import cn from "classnames";

interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children?: ReactNode | any;
}

const Button = (props: IButton) => {
  const { className, children, ...rest } = props;

  return (
    <button className={cn(className, "outline-none")} {...rest}>
      {children || "Продолжить"}
    </button>
  );
};

export default Button;

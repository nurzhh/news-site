import React, { InputHTMLAttributes, ReactNode } from "react";
import cn from "classnames";

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  bgColor?: string;
  className?: string;
  classField?: string;
  children?: ReactNode;
}

const Input: React.FC<IInputProps> = ({
  bgColor = "black",
  className,
  classField,
  children,
  ...rest
}) => {
  return (
    <div className={cn(classField, "field")}>
      <input
        className={cn(
          className,
          `field__input w-full`,
          `outline-none field__input--${bgColor}`
        )}
        {...rest}
      />
      {children}
    </div>
  );
};

export default Input;

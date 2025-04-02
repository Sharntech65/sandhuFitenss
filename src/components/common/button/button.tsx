import React, { ReactNode } from "react";

interface ButtonProps {
  className?: string;
  children: ReactNode;
  type?: any;
  onClick?:any;
}

const Button = ({ className, children,type,onClick }: ButtonProps) => {
  return (
    <button onClick={onClick} type={type} className={`custom_button ${className || ""}`}>{children}</button>
  );
};

export default Button;

import React, { ReactNode } from "react";
import { ArrowIcon } from "../../../../public/assets/icons";

interface ButtonProps {
  className?: string;
  children: ReactNode;
  type?: any;
  onClick?: any;
}

const CommonArrowButton = ({
  className,
  children,
  type,
  onClick,
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`custom_arrow_btn ${className || ""}`}
    >
      {children}
      <div className="right_icon">
        <ArrowIcon />
      </div>
    </button>
  );
};

export default CommonArrowButton;

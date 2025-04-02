import React, { ChangeEvent, ReactNode } from "react";

interface InputProps {
  label?: string;
  type?: string; // Or "text" | "password" | "email" | ... (specify allowed types)
  placeholder?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  name?: string | undefined;
  id?:any;
}

const Input: React.FC<InputProps> = ({ label, type, placeholder, onChange, value,id,name}) => {
  return (
    <>
      <div className="common_input">
        {label && <label>{label}</label>}
        <input
          type={type}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          name={name}
          id={id}
        />
      </div>
    </>
  );
};

export default Input;
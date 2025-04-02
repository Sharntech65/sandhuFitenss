import React, { ChangeEvent, WheelEvent, KeyboardEvent } from "react";

interface InputProps {
  label?: string;
  type?: "text" | "password" | "email" | "number" | "tel" | "url";
  placeholder?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  name?: string;
  id?: string;
  error?: string;
}

const Input: React.FC<InputProps> = ({
  label,
  type = "text",
  placeholder = "",
  onChange,
  onBlur,
  value = "",
  id,
  name,
  error,
}) => {
  const handleWheel = (event: WheelEvent<HTMLInputElement>) => {
    if (type === "number") {
      event.currentTarget.blur(); // Prevent scrolling by removing focus
    }
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (
      type === "number" &&
      (event.key === "ArrowUp" || event.key === "ArrowDown")
    ) {
      event.preventDefault(); // Prevent number increment/decrement with arrow keys
    }
  };

  return (
    <div className="common_input">
      {label && <label htmlFor={id}>{label}</label>}
      <input
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        name={name}
        id={id}
        onWheel={handleWheel} // Prevents scrolling in number inputs
        onKeyDown={handleKeyDown} // Prevents up/down key adjustments
      />
      {error && <span className="error_message">{error}</span>}
    </div>
  );
};

export default Input;

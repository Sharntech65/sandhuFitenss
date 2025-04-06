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
  maxLength?: number;
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
  maxLength,
}) => {
  const handleWheel = (event: WheelEvent<HTMLInputElement>) => {
    if (type === "number") {
      event.currentTarget.blur(); // Prevent scrolling by removing focus
    }
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (
      type === "number" &&
      (event.key === "ArrowUp" ||
        event.key === "ArrowDown" ||
        event.key === "e")
    ) {
      event.preventDefault(); // Prevent unwanted keys
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;

    if (type === "number" && maxLength !== undefined) {
      if (inputValue.length > maxLength) return;
    }

    if (onChange) onChange(event);
  };

  return (
    <div className="common_input">
      {label && <label htmlFor={id}>{label}</label>}
      <input
        type={type}
        placeholder={placeholder}
        onChange={handleChange}
        onBlur={onBlur}
        value={value}
        name={name}
        id={id}
        onWheel={handleWheel}
        onKeyDown={handleKeyDown}
        maxLength={type !== "number" ? maxLength : undefined} // only apply if not number
      />
      {error && <span className="error_message">{error}</span>}
    </div>
  );
};

export default Input;

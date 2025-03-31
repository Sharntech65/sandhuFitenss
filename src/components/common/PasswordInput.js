"use-client";
import React, { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

export const PasswordInput = React.forwardRef(
  ({ label, placeholder, error, ...rest }, ref) => {
    const [reveal, setReveal] = useState(false);
    const RevealIcon = reveal ? AiFillEye : AiFillEyeInvisible;

    return (
      <div className="">
        <label className="form-label fw600 dark-color">{label}</label>

        <div className="relative">
          <input
            ref={ref}
            type={reveal ? "text" : "password"}
            className={`form-control ${error ? "form-error" : ""}`}
            placeholder={placeholder}
            {...rest}
          />
          <div className="password-input-icon">
            <RevealIcon
              onClick={() => setReveal((prevState) => !prevState)}
              className="icon"
            />
          </div>
        </div>

        <span className={` ${error?.message ? "error" : "hidden"}`}>
          {error?.message}
        </span>
      </div>
    );
  }
);

import React, { useState } from "react";
import PropTypes from "prop-types";
import WarningIcon from "../images/warning.svg"

const InputField = ({ label,labelIcon, id, name, placeholder, error, type, ref, onChange }) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handleTogglePasswordVisibility = () => {
    setIsPasswordVisible((prevState) => !prevState);
  };

  const isPasswordField = type === "password";

  return (
    <div className="flex flex-col space-y-2 relative mt-3">
      {label && (
        <label
          htmlFor={id}
          className="text-[13px]/[17.73px] text-myColorsGrey-700 font-medium flex flex-row"
        >
          {label }{labelIcon&&<img src={WarningIcon} className="mx-1"/>}
        </label>
      )}
      <div className="relative">
        <input
          type={isPasswordField && isPasswordVisible ? "text" : type}
          ref={ref}
          id={id}
          name={name}
          onChange={onChange ? onChange : () => {}} // Provide a no-op function if onChange is not passed
          placeholder={placeholder}
          className={`p-2 rounded-md w-full border ${
            error
              ? "border-red-500 text-red focus:ring-red-500 focus:border-red-500"
              : "border-gray-300 text-gray-500 focus:ring-gray-400 focus:border-gray-400"
          } focus:outline-none`}
        />
        {isPasswordField && (
          <button
            type="button"
            onClick={handleTogglePasswordVisibility}
            className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-gray-700 focus:outline-none"
          >
            {isPasswordVisible ? (
              <svg
                className="w-6 h-6 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeWidth="2"
                  d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z"
                />
                <path
                  stroke="currentColor"
                  strokeWidth="2"
                  d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3.933 13.909A4.357 4.357 0 0 1 3 12c0-1 4-6 9-6m7.6 3.8A5.068 5.068 0 0 1 21 12c0 1-3 6-9 6-.314 0-.62-.014-.918-.04M5 19 19 5m-4 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
            )}
          </button>
        )}
      </div>
      {error && <span className="text-red text-sm">{error}</span>}
    </div>
  );
};

InputField.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  error: PropTypes.string,
  type: PropTypes.string,
  ref: PropTypes.oneOfType([PropTypes.func, PropTypes.shape({ current: PropTypes.any })]),
  onChange: PropTypes.func, // Make onChange optional
};

InputField.defaultProps = {
  placeholder: "",
  error: null,
  type: "text",
  onChange: null, // Default to null if not provided
};

export default InputField;

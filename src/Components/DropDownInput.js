import React, { useState } from "react";
import PropTypes from "prop-types";
import WarningIcon from "../images/warning.svg"

const DropdownInput = ({ 
  label, 
  labelIcon,
  id, 
  name, 
  options, 
  placeholder, 
  error, 
  value, 
  onChange 
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleDropdown = () => setIsOpen((prev) => !prev);

  const handleSelectOption = (selectedValue) => {
    onChange(selectedValue);
    setIsOpen(false);
  };

  return (
    <div className="flex flex-col space-y-2 relative mt-3">
      {label && (
        <label
          htmlFor={id}
          className="text-[13px]/[17.73px] text-myColorsGrey-700 font-medium flex flex-row"
        >
          {label}{labelIcon&&<img src={WarningIcon} className="mx-1"/>}
        </label>
      )}
      <div className="relative">
        <button
          type="button"
          onClick={handleToggleDropdown}
          className={`p-2 rounded-md w-full border ${
            error
              ? " border-red text-red focus:ring-red-500 focus:border-red-500"
              : "border-gray-300 text-gray-700 focus:ring-gray-400 focus:border-gray-400"
          } focus:outline-none flex justify-between items-center`}
        >
          {value || placeholder}
          <svg
            className={`w-4 h-4 transition-transform ${
              isOpen ? "rotate-180" : ""
            }`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
        {isOpen && (
          <ul className="absolute z-10 mt-1 bg-white border border-gray-300 text-myColorsGrey-100 rounded-md shadow-lg max-h-60 overflow-auto w-full">
            {options.map((option, index) => (
              <li
                key={index}
                onClick={() => handleSelectOption(option)}
                className="cursor-pointer px-4 py-2 hover:bg-gray-100"
              >
                {option}
              </li>
            ))}
          </ul>
        )}
      </div>
      {error && <span className="text-red text-sm">{error}</span>}
    </div>
  );
};

DropdownInput.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  placeholder: PropTypes.string,
  error: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

DropdownInput.defaultProps = {
  placeholder: "Assign department head",
  error: null,
  value: "",
};

export default DropdownInput;

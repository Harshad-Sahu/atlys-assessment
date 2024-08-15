import React from "react";
import { ButtonProps } from "../../utilities/types";

const Button: React.FC<ButtonProps> = ({ buttonLabel, handleClick }) => {
  return (
    <button
      type="submit"
      className="w-full py-3 px-4 bg-custom-btn-blue text-white font-medium text-custom-16 leading-lh-120 rounded-lg shadow-md hover:bg-blue-500 cursor-pointer"
      onClick={handleClick}>
      {buttonLabel}
    </button>
  );
};

export default Button;

import React from "react";
import { CrossIcon } from "../../assets";
import { ToastProps } from "../../utilities/types";

const Toast: React.FC<ToastProps> = ({ isError = false, message, onClose }) => {
  return (
    <div
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 w-11/12 max-w-md p-4 rounded-lg shadow-md ${
        isError ? "bg-red-400 text-white" : "bg-green-500 text-white"
      }`}>
      <div className="flex items-center justify-between">
        <span>{message}</span>
        <button className="ml-4 p-1" onClick={onClose} aria-label="Close">
          <img src={CrossIcon} alt="Close" className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default Toast;

import React from "react";
import {
  Controller,
  Control,
  FieldValues,
  FieldError,
  Path,
  PathValue,
} from "react-hook-form";
import { EyeIcon, EyeOffIcon } from "../../assets/index";

type FormInputProps<T extends FieldValues> = {
  name: Path<T>;
  control: Control<T>;
  placeholder: string;
  type?: string;
  errors: Partial<Record<Path<T>, FieldError | undefined>>;
  defaultValue?: PathValue<T, Path<T>>;
  showPasswordToggle?: boolean;
  showPassword?: boolean;
  onPasswordToggle?: () => void;
  label: string;
  forgotPasswordText?: string;
};

const FormInput = <T extends FieldValues>({
  name,
  control,
  placeholder,
  type = "text",
  errors,
  defaultValue,
  showPasswordToggle = false,
  showPassword = false,
  onPasswordToggle,
  label,
  forgotPasswordText,
}: FormInputProps<T>) => {
  // Generate a unique id for each input
  const uniqueId = React.useMemo(() => `input-${name}`, [name]);

  // Check if there's an error for the current field
  const error = errors[name as Path<T>];

  return (
    <div className="mb-[20px] relative">
      <label
        className={`block text-custom-label-color text-custom-14 font-medium leading-lh-120 mb-2.5 ${
          forgotPasswordText ? "flex items-center justify-between" : ""
        }`}
        htmlFor={uniqueId}>
        {label}
        {forgotPasswordText && (
          <button className="text-custom-label-color text-custom-14 font-medium leading-lh-120 hover:text-custom-btn-blue">
            {forgotPasswordText}
          </button>
        )}
      </label>
      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue}
        render={({ field }) => (
          <div className="relative">
            <input
              id={uniqueId}
              type={showPassword && type === "password" ? "text" : type}
              placeholder={placeholder}
              className={`block px-3 py-2 border rounded-md bg-transparent text-white text-custom-16 font-md-400 leading-lh-120 placeholder-custom-placeholder w-[18rem] sm:w-[26rem] max-w-[416px]`}
              style={{
                border: `${
                  error
                    ? "1.5px solid #ef4444"
                    : "1.5px solid rgba(53, 55, 59, 1)"
                }`,
              }}
              {...field}
            />
            {showPasswordToggle && type === "password" && (
              <button
                type="button"
                onClick={onPasswordToggle}
                className="absolute inset-y-0 right-3 flex items-center cursor-pointer z-10">
                <img
                  src={showPassword ? EyeOffIcon : EyeIcon}
                  alt="Toggle Password Visibility"
                  className="h-5 w-5 text-gray-500"
                />
              </button>
            )}
          </div>
        )}
      />
      {error && <p className="text-red-500 text-xs mt-2">{error.message}</p>}
    </div>
  );
};

export default FormInput;

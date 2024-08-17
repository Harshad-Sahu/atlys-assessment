import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "../Button";
import FormInput from "../FormInput";
import { LoginFormData, PropsForm } from "../../utilities/types";
import { loginSchema } from "../../utilities/yupSchema";
import Toast from "../Toast";

const LoginForm: React.FC<PropsForm> = ({ handleClosePopup }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: yupResolver(loginSchema),
  });
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [toast, setToast] = useState<{
    isError: boolean;
    message: string;
  } | null>(null);

  // Use effect to auto-close toast after 5 seconds
  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => {
        setToast(null);
      }, 5000); // Auto close after 5 seconds

      return () => clearTimeout(timer);
    }
  }, [toast]);

  const onSubmit = (data: LoginFormData) => {
    const { usernameOrEmail, password } = data;

    // Retrieve the user array from localStorage
    const existingUserData = localStorage.getItem("users");

    // Parse the existing user data into an array, or initialize an empty array if none exists
    let userArray = existingUserData ? JSON.parse(existingUserData) : [];

    // Check if the user exists in the array
    const user = userArray.find(
      (user: { email: string; username: string; password: string }) =>
        user.email === usernameOrEmail || user.username === usernameOrEmail
    );

    if (user) {
      // Check if the provided password matches the stored password
      if (password === user.password) {
        // Hide toast on successful login
        setToast(null);
        handleClosePopup?.();
        navigate("/posts");
      } else {
        setToast({
          isError: true,
          message: "Incorrect password. Please try again.",
        });
      }
    } else {
      setToast({
        isError: true,
        message: "User not found. Please register or check details",
      });
    }
  };

  return (
    <>
      {toast && (
        <Toast
          isError={toast.isError}
          message={toast.message}
          onClose={() => setToast(null)}
        />
      )}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="relative w-full max-w-[416px] z-10">
        <FormInput
          name="usernameOrEmail"
          control={control}
          placeholder="Enter your email or username"
          errors={errors}
          defaultValue=""
          label="Email or Username"
        />

        <FormInput
          name="password"
          control={control}
          placeholder="Enter your password"
          type="password"
          errors={errors}
          defaultValue=""
          showPasswordToggle
          showPassword={showPassword}
          onPasswordToggle={() => {
            setShowPassword(!showPassword);
          }}
          label="Password"
          forgotPasswordText="Forgot Password?"
        />

        <Button buttonLabel="Login Now" handleClick={() => {}} />
      </form>
    </>
  );
};

export default LoginForm;

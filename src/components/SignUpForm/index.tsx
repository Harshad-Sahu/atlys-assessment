import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "../Button";
import FormInput from "../FormInput";
import { PropsForm, SignUpFormData } from "../../utilities/types";
import { signUpSchema } from "../../utilities/yupSchema";
import Toast from "../Toast";
import { useNavigate } from "react-router-dom";

const SignUpForm: React.FC<PropsForm> = ({ handleClosePopup }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormData>({
    resolver: yupResolver(signUpSchema),
  });

  const [showPassword, setShowPassword] = React.useState(false);
  const navigate = useNavigate();

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

  const onSubmit = (data: SignUpFormData) => {
    const { email, password, username } = data;

    // Retrieve the existing user array from localStorage
    const existingUserData = localStorage.getItem("users");

    // Parse the existing user data into an array, or initialize an empty array if none exists
    let userArray = existingUserData ? JSON.parse(existingUserData) : [];

    // Check if the user already exists in the array
    const userExists = userArray.some(
      (user: { email: string; username: string; password: string }) =>
        user.email === email || user.username === username
    );

    if (userExists) {
      // Show toast if user already exists
      setToast({
        isError: true,
        message:
          "User already exists. Please use a different email or username.",
      });
    } else {
      // Add new user to the array
      userArray.push({ email, password, username });

      // Store the updated user array back in localStorage
      localStorage.setItem("users", JSON.stringify(userArray));
      handleClosePopup?.();
      navigate("/posts");
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
          name="email"
          control={control}
          placeholder="Enter your email"
          type="email"
          errors={errors}
          defaultValue=""
          label="Email"
        />

        <FormInput
          name="username"
          control={control}
          placeholder="Enter your username"
          type="text"
          errors={errors}
          defaultValue=""
          label="Username"
        />

        <FormInput
          name="password"
          control={control}
          placeholder="Enter your password"
          type="password"
          errors={errors}
          defaultValue=""
          showPasswordToggle={true}
          showPassword={showPassword}
          onPasswordToggle={() => setShowPassword(!showPassword)}
          label="Password"
        />

        <Button buttonLabel="Continue" handleClick={() => {}} />
      </form>
    </>
  );
};

export default SignUpForm;

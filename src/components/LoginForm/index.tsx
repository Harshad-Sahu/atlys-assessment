import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "../Button";
import FormInput from "../FormInput";
import { LoginFormData } from "../../utilities/types";
import { loginSchema } from "../../utilities/yupSchema";

const LoginForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: yupResolver(loginSchema),
  });

  const [showPassword, setShowPassword] = React.useState(false);

  const onSubmit = (data: LoginFormData) => {
    console.log(data);
    // Handle form submission
  };

  return (
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
  );
};

export default LoginForm;

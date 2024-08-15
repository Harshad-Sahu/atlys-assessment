import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "../Button";
import FormInput from "../FormInput";
import { SignUpFormData } from "../../utilities/types";
import { signUpSchema } from "../../utilities/yupSchema";

const SignUpForm: React.FC = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormData>({
    resolver: yupResolver(signUpSchema),
  });

  const [showPassword, setShowPassword] = React.useState(false);

  const onSubmit = (data: SignUpFormData) => {
    console.log(data);
    // Handle form submission
  };

  return (
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
  );
};

export default SignUpForm;

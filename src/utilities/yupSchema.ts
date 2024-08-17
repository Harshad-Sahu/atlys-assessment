import * as yup from "yup";

export const signUpSchema = yup
  .object({
    email: yup
      .string()
      .email("Invalid email format")
      .required("Email is required"),
    username: yup
      .string()
      .required("Username is required")
      .matches(
        /^[a-zA-Z0-9._]+$/,
        "Username can only contain letters, numbers, dots, and underscores. Spaces are not allowed."
      ),
    password: yup
      .string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters long")
      .matches(/[0-9]/, "Password must contain at least one number")
      .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
      .matches(/[a-z]/, "Password must contain at least one lowercase letter")
      .matches(/[\W_]/, "Password must contain at least one special character"),
  })
  .required();

export const loginSchema = yup
  .object({
    usernameOrEmail: yup
      .string()
      .required("Email or Username is required")
      .test("valid-username-or-email", function (value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const usernameRegex = /^[a-zA-Z0-9._]+$/;

        if (!value) return false;

        // Check if value is a valid email
        if (emailRegex.test(value)) return true;

        // Check if value is a valid username
        if (usernameRegex.test(value)) return true;

        // If not valid, determine the specific error message
        if (usernameRegex.test(value) === false) {
          return this.createError({
            message:
              "Username can only contain letters, numbers, dots, and underscores. Spaces are not allowed.",
          });
        }

        return this.createError({
          message: "Invalid username or email format.",
        });
      }),
    password: yup.string().required("Password is required"),
  })
  .required();

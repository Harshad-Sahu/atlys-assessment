import {
  Control,
  FieldValues,
  FieldError,
  Path,
  PathValue,
} from "react-hook-form";

export type FormInputProps<T extends FieldValues> = {
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

export type LoginSignUpScreenType = {
  mainSubHeading: string;
  mainHeading: string;
  footerText: string;
  footerRedirectText: string;
};

export type ButtonProps = {
  buttonLabel: string;
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  buttonWidth?: string | number;
};

export type LoginFormData = {
  usernameOrEmail: string;
  password: string;
};

export type SignUpFormData = {
  email: string;
  username: string;
  password: string;
};

export type UserPostType = {
  id: number;
  userName: string;
  userProfileThumbnail: string;
  postTime: string;
  edited: boolean;
  commentCount: number;
  postContent: string;
};

export type UserPostProps = {
  userPostInfo: UserPostType;
  userActions?: () => void;
};

export type AuthFormProp = {
  postsScreen?: boolean;
  onClose?: () => void;
};

export type CreatePostProps = {
  handlePost?: () => void;
};

export type EmojiImageProps = {
  imageIcon: string | React.ReactNode;
  altImageText: string;
};

export type ToastProps = {
  isError?: boolean;
  message: string;
  onClose: () => void;
};

export type PropsForm = {
  handleClosePopup: () => void;
};

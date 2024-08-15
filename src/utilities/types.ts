export type LoginSignUpScreenType = {
  "main-sub-heading": string;
  "main-heading": string;
  "footer-text": string;
  "footer-redirect-text": string;
};

export type ButtonProps = {
  buttonLabel: string;
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
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

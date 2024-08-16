import { LoginSignUpScreenType, UserPostType } from "./types";

export const LoginScreenValues: LoginSignUpScreenType = {
  "main-sub-heading": "Welcome Back",
  "main-heading": "Log into your account",
  "footer-text": "Not registered yet?",
  "footer-redirect-text": "Register →",
};

export const SignupScreenValues: LoginSignUpScreenType = {
  "main-sub-heading": "SIGN UP",
  "main-heading": "Create an account to continue",
  "footer-text": "Already have an account?",
  "footer-redirect-text": "Login →",
};

export const DummyPosts: UserPostType[] = [
  {
    id: 1,
    userName: "Theresa Webb",
    userProfileThumbnail: "https://i.pravatar.cc/150?img=28",
    postTime: "5 mins",
    edited: false,
    commentCount: 24,
    postContent:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
  },
  {
    id: 2,
    userName: "Marvin McKinney",
    userProfileThumbnail: "https://i.pravatar.cc/150?img=56",
    postTime: "8 mins",
    edited: true,
    commentCount: 10,
    postContent:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
  },
  {
    id: 3,
    userName: "Ronald Weasley",
    userProfileThumbnail: "https://i.pravatar.cc/150?img=3",
    postTime: "a week",
    edited: false,
    commentCount: 12,
    postContent:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
  },
];

export const emojiCodes = [
  "1f602", // 😂
  "1f60a", // 😊
  "1f612", // 😒
  "1f60d", // 😍
  "1f618", // 😘
  "1f44c", // 👌
  "1f44d", // 👍
  "1f91e", // 🤞
  "1f604", // 😄
  "1f60e", // 😎
  "1f644", // 🙄
  "1f44b", // 👋
  "1f44f", // 👏
];

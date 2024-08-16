import React, { useState } from "react";
import * as CONSTANTS from "../../utilities/constant";
import LoginForm from "../LoginForm";
import SignUpForm from "../SignUpForm";
import "./AuthForm.scss";

const AuthForm: React.FC = () => {
  const [showLogin, setShowLogin] = useState(true);
  const [transitioning, setTransitioning] = useState(false);

  const handleScreenChange = () => {
    setTransitioning(true);
    setTimeout(() => {
      setShowLogin(!showLogin);
      setTransitioning(false);
    }, 300);
  };

  return (
    <div
      className={`login-form-container relative p-10 rounded-lg bg-[#27292d] flex-col items-center transition-opacity duration-300 ease-in-out ${
        transitioning ? "opacity-0" : "opacity-100"
      }`}>
      <div className="gradient-overlay"></div>
      <div className="header-wrapper mb-11 flex items-center justify-center flex-col">
        <p className="heading-top text-custon-font-gray text-custom-14 font-medium leading-lh-120 mb-2 uppercase">
          {showLogin
            ? CONSTANTS.LoginScreenValues["main-sub-heading"]
            : CONSTANTS.SignupScreenValues["main-sub-heading"]}
        </p>
        <p className="heading-bottom text-white text-custom-18 font-semibold leading-lh-120">
          {showLogin
            ? CONSTANTS.LoginScreenValues["main-heading"]
            : CONSTANTS.SignupScreenValues["main-heading"]}
        </p>
      </div>

      {showLogin ? <LoginForm /> : <SignUpForm />}

      <p className="registration-text relative mt-3 text-custom-placeholder text-custom-14 font-medium leading-lh-120 z-10">
        {showLogin
          ? CONSTANTS.LoginScreenValues["footer-text"]
          : CONSTANTS.SignupScreenValues["footer-text"]}
        &nbsp;
        <span
          className="register-link text-custom-label-color cursor-pointer"
          onClick={handleScreenChange}>
          {showLogin
            ? CONSTANTS.LoginScreenValues["footer-redirect-text"]
            : CONSTANTS.SignupScreenValues["footer-redirect-text"]}
        </span>
      </p>
    </div>
  );
};

export default AuthForm;

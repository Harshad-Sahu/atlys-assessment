import React, { useState } from "react";
import * as CONSTANTS from "../../utilities/constant";
import LoginForm from "../LoginForm";
import SignUpForm from "../SignUpForm";
import { AuthFormProp } from "../../utilities/types";
import "./AuthForm.scss";
import { CrossIcon } from "../../assets";

const AuthForm: React.FC<AuthFormProp> = ({ postsScreen = false, onClose }) => {
  const [showLogin, setShowLogin] = useState(true);
  const [transitioning, setTransitioning] = useState(false);

  const handleScreenChange = () => {
    setTransitioning(true);
    setTimeout(() => {
      setShowLogin(!showLogin);
      setTransitioning(false);
    }, 300);
  };

  const handleClosePopup = () => {
    onClose?.();
  };

  return (
    <div
      className={`login-form-container relative p-10 rounded-lg bg-[#27292d] flex-col items-center transition-opacity duration-300 ease-in-out ${
        transitioning ? "opacity-0" : "opacity-100"
      }`}>
      <div className="gradient-overlay"></div>

      {postsScreen && (
        <div
          onClick={handleClosePopup}
          className="absolute z-10 w-8 h-8 bg-custom-bg rounded-full cursor-pointer top-4 right-4 flex items-center justify-center">
          <img
            src={CrossIcon}
            alt="Cross Popup"
            className="relative w-[10px] h-[10px]"
          />
        </div>
      )}

      <div className="header-wrapper mb-11 flex items-center justify-center flex-col">
        <p className="heading-top text-custon-font-gray text-custom-14 font-medium leading-lh-120 mb-2 uppercase">
          {showLogin
            ? CONSTANTS.LoginScreenValues.mainSubHeading
            : CONSTANTS.SignupScreenValues.mainSubHeading}
        </p>
        <p className="heading-bottom text-white text-custom-18 font-semibold leading-lh-120">
          {showLogin
            ? CONSTANTS.LoginScreenValues.mainHeading
            : CONSTANTS.SignupScreenValues.mainHeading}
        </p>
      </div>

      {showLogin ? (
        <LoginForm handleClosePopup={handleClosePopup} />
      ) : (
        <SignUpForm handleClosePopup={handleClosePopup} />
      )}

      <p className="registration-text relative mt-3 text-custom-placeholder text-custom-14 font-medium leading-lh-120 z-10">
        {showLogin
          ? CONSTANTS.LoginScreenValues.footerText
          : CONSTANTS.SignupScreenValues.footerText}
        &nbsp;
        <span
          className="register-link text-custom-label-color cursor-pointer"
          onClick={handleScreenChange}>
          {showLogin
            ? CONSTANTS.LoginScreenValues.footerRedirectText
            : CONSTANTS.SignupScreenValues.footerRedirectText}
        </span>
      </p>
    </div>
  );
};

export default AuthForm;

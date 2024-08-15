import React from "react";
import AppLogo from "../../assets/app-logo.svg";
import AuthForm from "../../components/AuthForm";

const Home: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-custom-bg">
      <div className="flex flex-col items-center">
        <img
          src={AppLogo}
          alt="Post App"
          className="w-[2.5rem] h-[2.5rem] mb-[2.5rem]"
        />
        <AuthForm />
      </div>
    </div>
  );
};

export default Home;

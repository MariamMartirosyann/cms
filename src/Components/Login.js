import React, { useRef, useState } from "react";
import BluRectengle from "../images/Rectangle 41961.jpg";
import SignInImage from "../images/OBJECTS.svg";
import InputField from "./InputField";
import { checkEmail, checkPassword } from "../untils/validate";
import { useNavigate } from "react-router";

const Login = () => {
  const [resetPassword, setResetPassword] = useState(false);
  const [errorEmail, setErrorEmail] = useState(null);
  const [errorPassword, setErrorPassword] = useState(null);
  
  const email = useRef(null);
  const password = useRef(null);

  const navigate= useNavigate()

  const handleSendLink=()=>{
  navigate("/resetpassword")
  }

  const handleButtonClick = () => {
    const messageEmail = checkEmail(email.current.value);
    const messagePassword = checkPassword(password.current.value);
    setErrorEmail(messageEmail);
    setErrorPassword(messagePassword);
    if (messageEmail || messagePassword) return;
    navigate("/dashboard")
  };

  const handelResetPassword = () => {
    setResetPassword(true);
  };
  const handleSignIn = () => {
    setResetPassword(false);
  };

  return (
    <div className="flex flex-row">
      <div className="w-[631px]  h-[80%] flex justify-center relative  align-middle m-3">
        <img width="602px" height="994px" src={BluRectengle} alt="rectengle" />
        <img
          className=" mt-[200px] absolute"
          width="562px"
          height="504px"
          src={SignInImage}
          alt="Sign in page image"
        />
      </div>

      <form
        className="flex flex-col w-[390px] mx-auto mt-[10%]"
        onSubmit={(e) => e.preventDefault()}
      >
        {" "}
        <h1 className="text-[32px]/[43,65]  font-bold mx-auto mt-10 mb-5">
          {resetPassword ? "Reset password" : "Sign in"}
        </h1>
        <p className=" font-normal text-[13px]/[17,73px] text-myColorsGrey-100 text-center">
          {resetPassword
            ? "Enter the email address associated with your account, and we’ll send you a link to reset your password."
            : "Enter your Email address and password to log in to your CRM system.After successful login, you will be redirected to your dashboard."}
        </p>
        <InputField
          label="Email Adress"
          ref={email}
          id="email"
          name="Email Adress"
          placeholder="Email Adress"
          error={errorEmail}
        />
        {!resetPassword ? (
          <InputField
            ref={password}
            label="Password"
            id="password"
            name="password"
            placeholder="Enter your password"
            type="password"
            error={errorPassword}
          />
        ) : null}
        <button
          onClick={resetPassword? handleSendLink : handleButtonClick}
          className=" text-[16px]/[21,82px] p-4  my-5 rounded-lg bg-myColors-100 text-white"
        >
          {resetPassword?"Send the link":"Conteniue"}
        </button>
        {!resetPassword ? (
          <>
            <h3
              onClick={handelResetPassword}
              className="text-[16px]/[21,82px] text-myColorsGrey-100 mx-auto"
            >
              Forget password?
            </h3>
            <p className="text-[11px]/[15px] text-center mt-10">
              By signing up to create an account I accept Company’s
            </p>
            <p className="text-[11px]/[15px] text-center font-bold">
              {" "}
              Terms of use & Privacy Policy.
            </p>
          </>
        ) : null}
        {resetPassword ? (
          <p
            className="text-[11px]/[15px] text-center font-bold"
            onClick={handleSignIn}
          >
            {" "}
            or Sign In
          </p>
        ) : null}
      </form>
    </div>
  );
};

export default Login;

import React, { useEffect, useState } from "react";
import BluRectengle from "../images/Rectangle 41961.jpg";
import SignInImage from "../images/OBJECTS.svg";
import InputField from "./InputField";
import { checkPassword } from "../untils/validate";
import Elipe from "../images/Ellipse 2.svg";
import Chekmark from "../images/Group.svg";
import { useNavigate } from "react-router";

const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const [resetPassword, setResetPassword] = useState(false);
  const [passwordsMatched, setPassswordsMatched] = useState(false);
  const [openCongtas, setOpenCongrats] = useState(false);

  const [resetPasswordError, setResetPasswordError] = useState("");

  const [redCross, setRedCross] = useState(false);
  const [greenCheckmark, setGreenChekmark] = useState(false);

  const [redCrossOneNumber, setRedCrossOneNumber] = useState(false);
  const [greenCheckmarkOneNumber, setGreenChekmarkOneNumber] = useState(false);

  const [redCrossOneUpperCase, setRedCrossOneUpperCase] = useState(false);
  const [greenCheckmarkOneUpperCase, setGreenChekmarkOneUpperCase] =
    useState(false);

  const [redCrossContainsSimbol, setRedCrossContainsSimbol] = useState(false);
  const [greenCheckmarkContainsSimbol, setGreenChekmarkContainsSimbol] =
    useState(false);

  const [errorMode, setErrorMode] = useState(false);
  const navigate = useNavigate();

  const checkLength = (e) => {
    const lengthRegex = /^.{8,32}$/;

    if (!lengthRegex.test(e.target.value)) {
      setRedCross(true);
      setGreenChekmark(false);
    } else {
      setRedCross(false);
      setGreenChekmark(true);
    }
  };

  const oneNumber = (e) => {
    const numberRegex = /[0-9]/;
    if (!numberRegex.test(e.target.value)) {
      setRedCrossOneNumber(true);
      setGreenChekmarkOneNumber(false);
    } else {
      setRedCrossOneNumber(false);
      setGreenChekmarkOneNumber(true);
    }
  };

  const oneUpperCase = (e) => {
    const regex = /^(?=.*[A-Z])(?=.*[a-z]).+$/;

    if (!regex.test(e.target.value)) {
      setRedCrossOneUpperCase(true);
      setGreenChekmarkOneUpperCase(false);
    } else {
      setRedCrossOneUpperCase(false);
      setGreenChekmarkOneUpperCase(true);
    }
  };

  const containsSimbol = (e) => {
    const regex = /[!@#$%^&*(),.?":{}|<>~`_\-+=\\[\]\/]/;

    if (!regex.test(e.target.value)) {
      setRedCrossContainsSimbol(true);
      setGreenChekmarkContainsSimbol(false);
    } else {
      setRedCrossContainsSimbol(false);
      setGreenChekmarkContainsSimbol(true);
    }
  };

  const handleOnChange = (e) => {
    if (!e) return;
    setErrorMode(true);
    oneNumber(e);
    checkLength(e);
    oneUpperCase(e);
    containsSimbol(e);
    setNewPassword(e.target.value);
    wholeCheck(e.target.value);
  };

  const wholeCheck = (password) => {
    if (checkPassword(password) === null) setErrorMode(false);
  };

  const comparePasswords = () => {
    if (!newPassword || !resetPassword) return;
    if (newPassword === resetPassword) {
      setResetPasswordError(false);
      setPassswordsMatched(true);
    } else {
      setResetPasswordError("Passwords do not match.");

      return "Passwords do not match.";
    }
  };
  const handleResetOnChange = (e) => {
    if (!e) return;
    setResetPasswordError("Passwords do not match.");
    setResetPassword(e.target.value);
    comparePasswords();
  };
  const handleRestPassword = () => {
    if (passwordsMatched) setOpenCongrats(true);
  };

  const handleLinkToSignIn = () => {
    navigate("/");
  };

  useEffect(
    (newPassword) => {
      wholeCheck(newPassword);
    },
    [newPassword]
  );

  useEffect(
    (e) => {
      handleOnChange(e);
    },
    [newPassword]
  );

  useEffect(() => {
    comparePasswords(newPassword, resetPassword);
  }, [newPassword, resetPassword]);

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
      <div className="flex flex-col w-[390px] mx-auto mt-[10%]">
        {!openCongtas ? (
          <form
            className="flex flex-col w-[390px] mx-auto mt-[10%]"
            onSubmit={(e) => e.preventDefault()}
          >
            <InputField
              value={newPassword}
              label="New password"
              id="newPassword"
              name="newPassword"
              placeholder="Enter your password"
              type="password"
              onChange={handleOnChange}
              error={errorMode}
            />
            <div className=" font-[14px]/[14px] text-myColorsGrey-100 my-3">
              <p className="flex flex-row">
                {redCross ? (
                  <svg
                    width="16"
                    height="16"
                    className=" mt-1"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.64592 4.64604C4.69236 4.59948 4.74754 4.56253 4.80828 4.53733C4.86903 4.51212 4.93415 4.49915 4.99992 4.49915C5.06568 4.49915 5.13081 4.51212 5.19155 4.53733C5.2523 4.56253 5.30747 4.59948 5.35392 4.64604L7.99992 7.29304L10.6459 4.64604C10.6924 4.59955 10.7476 4.56267 10.8083 4.53752C10.8691 4.51236 10.9342 4.49941 10.9999 4.49941C11.0657 4.49941 11.1308 4.51236 11.1915 4.53752C11.2522 4.56267 11.3074 4.59955 11.3539 4.64604C11.4004 4.69253 11.4373 4.74772 11.4624 4.80846C11.4876 4.86919 11.5005 4.9343 11.5005 5.00004C11.5005 5.06578 11.4876 5.13088 11.4624 5.19162C11.4373 5.25236 11.4004 5.30755 11.3539 5.35404L8.70692 8.00004L11.3539 10.646C11.4004 10.6925 11.4373 10.7477 11.4624 10.8085C11.4876 10.8692 11.5005 10.9343 11.5005 11C11.5005 11.0658 11.4876 11.1309 11.4624 11.1916C11.4373 11.2524 11.4004 11.3076 11.3539 11.354C11.3074 11.4005 11.2522 11.4374 11.1915 11.4626C11.1308 11.4877 11.0657 11.5007 10.9999 11.5007C10.9342 11.5007 10.8691 11.4877 10.8083 11.4626C10.7476 11.4374 10.6924 11.4005 10.6459 11.354L7.99992 8.70704L5.35392 11.354C5.30743 11.4005 5.25224 11.4374 5.1915 11.4626C5.13076 11.4877 5.06566 11.5007 4.99992 11.5007C4.93417 11.5007 4.86907 11.4877 4.80833 11.4626C4.74759 11.4374 4.6924 11.4005 4.64592 11.354C4.59943 11.3076 4.56255 11.2524 4.53739 11.1916C4.51223 11.1309 4.49929 11.0658 4.49929 11C4.49929 10.9343 4.51223 10.8692 4.53739 10.8085C4.56255 10.7477 4.59943 10.6925 4.64592 10.646L7.29292 8.00004L4.64592 5.35404C4.59935 5.30759 4.56241 5.25242 4.5372 5.19167C4.512 5.13093 4.49902 5.06581 4.49902 5.00004C4.49902 4.93427 4.512 4.86915 4.5372 4.80841C4.56241 4.74766 4.59935 4.69248 4.64592 4.64604Z"
                      fill="#E63946"
                    />
                  </svg>
                ) : greenCheckmark ? (
                  <svg
                    width="16"
                    height="16"
                    className=" mt-1"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.3337 4L6.00033 11.3333L2.66699 8"
                      stroke="#15C7A7"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ) : (
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    className=" mt-1"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="8" cy="8" r="2" fill="#6C757D" />
                  </svg>
                )}
                8-32 characters long
              </p>
              <p className="flex flex-row">
                {redCrossOneNumber ? (
                  <svg
                    width="16"
                    height="16"
                    className=" mt-1"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.64592 4.64604C4.69236 4.59948 4.74754 4.56253 4.80828 4.53733C4.86903 4.51212 4.93415 4.49915 4.99992 4.49915C5.06568 4.49915 5.13081 4.51212 5.19155 4.53733C5.2523 4.56253 5.30747 4.59948 5.35392 4.64604L7.99992 7.29304L10.6459 4.64604C10.6924 4.59955 10.7476 4.56267 10.8083 4.53752C10.8691 4.51236 10.9342 4.49941 10.9999 4.49941C11.0657 4.49941 11.1308 4.51236 11.1915 4.53752C11.2522 4.56267 11.3074 4.59955 11.3539 4.64604C11.4004 4.69253 11.4373 4.74772 11.4624 4.80846C11.4876 4.86919 11.5005 4.9343 11.5005 5.00004C11.5005 5.06578 11.4876 5.13088 11.4624 5.19162C11.4373 5.25236 11.4004 5.30755 11.3539 5.35404L8.70692 8.00004L11.3539 10.646C11.4004 10.6925 11.4373 10.7477 11.4624 10.8085C11.4876 10.8692 11.5005 10.9343 11.5005 11C11.5005 11.0658 11.4876 11.1309 11.4624 11.1916C11.4373 11.2524 11.4004 11.3076 11.3539 11.354C11.3074 11.4005 11.2522 11.4374 11.1915 11.4626C11.1308 11.4877 11.0657 11.5007 10.9999 11.5007C10.9342 11.5007 10.8691 11.4877 10.8083 11.4626C10.7476 11.4374 10.6924 11.4005 10.6459 11.354L7.99992 8.70704L5.35392 11.354C5.30743 11.4005 5.25224 11.4374 5.1915 11.4626C5.13076 11.4877 5.06566 11.5007 4.99992 11.5007C4.93417 11.5007 4.86907 11.4877 4.80833 11.4626C4.74759 11.4374 4.6924 11.4005 4.64592 11.354C4.59943 11.3076 4.56255 11.2524 4.53739 11.1916C4.51223 11.1309 4.49929 11.0658 4.49929 11C4.49929 10.9343 4.51223 10.8692 4.53739 10.8085C4.56255 10.7477 4.59943 10.6925 4.64592 10.646L7.29292 8.00004L4.64592 5.35404C4.59935 5.30759 4.56241 5.25242 4.5372 5.19167C4.512 5.13093 4.49902 5.06581 4.49902 5.00004C4.49902 4.93427 4.512 4.86915 4.5372 4.80841C4.56241 4.74766 4.59935 4.69248 4.64592 4.64604Z"
                      fill="#E63946"
                    />
                  </svg>
                ) : greenCheckmarkOneNumber ? (
                  <svg
                    width="16"
                    height="16"
                    className=" mt-1"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.3337 4L6.00033 11.3333L2.66699 8"
                      stroke="#15C7A7"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ) : (
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    className=" mt-1"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="8" cy="8" r="2" fill="#6C757D" />
                  </svg>
                )}
                At least one number
              </p>
              <p className="flex flex-row">
                {redCrossOneUpperCase ? (
                  <svg
                    width="16"
                    height="16"
                    className=" mt-1"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.64592 4.64604C4.69236 4.59948 4.74754 4.56253 4.80828 4.53733C4.86903 4.51212 4.93415 4.49915 4.99992 4.49915C5.06568 4.49915 5.13081 4.51212 5.19155 4.53733C5.2523 4.56253 5.30747 4.59948 5.35392 4.64604L7.99992 7.29304L10.6459 4.64604C10.6924 4.59955 10.7476 4.56267 10.8083 4.53752C10.8691 4.51236 10.9342 4.49941 10.9999 4.49941C11.0657 4.49941 11.1308 4.51236 11.1915 4.53752C11.2522 4.56267 11.3074 4.59955 11.3539 4.64604C11.4004 4.69253 11.4373 4.74772 11.4624 4.80846C11.4876 4.86919 11.5005 4.9343 11.5005 5.00004C11.5005 5.06578 11.4876 5.13088 11.4624 5.19162C11.4373 5.25236 11.4004 5.30755 11.3539 5.35404L8.70692 8.00004L11.3539 10.646C11.4004 10.6925 11.4373 10.7477 11.4624 10.8085C11.4876 10.8692 11.5005 10.9343 11.5005 11C11.5005 11.0658 11.4876 11.1309 11.4624 11.1916C11.4373 11.2524 11.4004 11.3076 11.3539 11.354C11.3074 11.4005 11.2522 11.4374 11.1915 11.4626C11.1308 11.4877 11.0657 11.5007 10.9999 11.5007C10.9342 11.5007 10.8691 11.4877 10.8083 11.4626C10.7476 11.4374 10.6924 11.4005 10.6459 11.354L7.99992 8.70704L5.35392 11.354C5.30743 11.4005 5.25224 11.4374 5.1915 11.4626C5.13076 11.4877 5.06566 11.5007 4.99992 11.5007C4.93417 11.5007 4.86907 11.4877 4.80833 11.4626C4.74759 11.4374 4.6924 11.4005 4.64592 11.354C4.59943 11.3076 4.56255 11.2524 4.53739 11.1916C4.51223 11.1309 4.49929 11.0658 4.49929 11C4.49929 10.9343 4.51223 10.8692 4.53739 10.8085C4.56255 10.7477 4.59943 10.6925 4.64592 10.646L7.29292 8.00004L4.64592 5.35404C4.59935 5.30759 4.56241 5.25242 4.5372 5.19167C4.512 5.13093 4.49902 5.06581 4.49902 5.00004C4.49902 4.93427 4.512 4.86915 4.5372 4.80841C4.56241 4.74766 4.59935 4.69248 4.64592 4.64604Z"
                      fill="#E63946"
                    />
                  </svg>
                ) : greenCheckmarkOneUpperCase ? (
                  <svg
                    width="16"
                    height="16"
                    className=" mt-1"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.3337 4L6.00033 11.3333L2.66699 8"
                      stroke="#15C7A7"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ) : (
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    className=" mt-1"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="8" cy="8" r="2" fill="#6C757D" />
                  </svg>
                )}
                One uppercase/lowercase letter
              </p>
              <p className="flex flex-row">
                {redCrossContainsSimbol ? (
                  <svg
                    width="16"
                    height="16"
                    className=" mt-1"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.64592 4.64604C4.69236 4.59948 4.74754 4.56253 4.80828 4.53733C4.86903 4.51212 4.93415 4.49915 4.99992 4.49915C5.06568 4.49915 5.13081 4.51212 5.19155 4.53733C5.2523 4.56253 5.30747 4.59948 5.35392 4.64604L7.99992 7.29304L10.6459 4.64604C10.6924 4.59955 10.7476 4.56267 10.8083 4.53752C10.8691 4.51236 10.9342 4.49941 10.9999 4.49941C11.0657 4.49941 11.1308 4.51236 11.1915 4.53752C11.2522 4.56267 11.3074 4.59955 11.3539 4.64604C11.4004 4.69253 11.4373 4.74772 11.4624 4.80846C11.4876 4.86919 11.5005 4.9343 11.5005 5.00004C11.5005 5.06578 11.4876 5.13088 11.4624 5.19162C11.4373 5.25236 11.4004 5.30755 11.3539 5.35404L8.70692 8.00004L11.3539 10.646C11.4004 10.6925 11.4373 10.7477 11.4624 10.8085C11.4876 10.8692 11.5005 10.9343 11.5005 11C11.5005 11.0658 11.4876 11.1309 11.4624 11.1916C11.4373 11.2524 11.4004 11.3076 11.3539 11.354C11.3074 11.4005 11.2522 11.4374 11.1915 11.4626C11.1308 11.4877 11.0657 11.5007 10.9999 11.5007C10.9342 11.5007 10.8691 11.4877 10.8083 11.4626C10.7476 11.4374 10.6924 11.4005 10.6459 11.354L7.99992 8.70704L5.35392 11.354C5.30743 11.4005 5.25224 11.4374 5.1915 11.4626C5.13076 11.4877 5.06566 11.5007 4.99992 11.5007C4.93417 11.5007 4.86907 11.4877 4.80833 11.4626C4.74759 11.4374 4.6924 11.4005 4.64592 11.354C4.59943 11.3076 4.56255 11.2524 4.53739 11.1916C4.51223 11.1309 4.49929 11.0658 4.49929 11C4.49929 10.9343 4.51223 10.8692 4.53739 10.8085C4.56255 10.7477 4.59943 10.6925 4.64592 10.646L7.29292 8.00004L4.64592 5.35404C4.59935 5.30759 4.56241 5.25242 4.5372 5.19167C4.512 5.13093 4.49902 5.06581 4.49902 5.00004C4.49902 4.93427 4.512 4.86915 4.5372 4.80841C4.56241 4.74766 4.59935 4.69248 4.64592 4.64604Z"
                      fill="#E63946"
                    />
                  </svg>
                ) : greenCheckmarkContainsSimbol ? (
                  <svg
                    width="16"
                    height="16"
                    className=" mt-1"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.3337 4L6.00033 11.3333L2.66699 8"
                      stroke="#15C7A7"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ) : (
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    className=" mt-1"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="8" cy="8" r="2" fill="#6C757D" />
                  </svg>
                )}
                Contains a symbol
              </p>
            </div>
            <InputField
              value={resetPassword}
              label="Reset Password"
              id="resetPassword"
              onChange={handleResetOnChange}
              name="resetPassword"
              placeholder="Reset Password"
              type="password"
              error={resetPasswordError}
            />
            <button
              onClick={handleRestPassword}
              className=" text-[16px]/[21,82px] p-4  my-5 rounded-lg bg-myColors-100 text-white"
            >
              Conteniue
            </button>
          </form>
        ) : (
          <div className=" border-myColorsGrey-100 bg-white shadow-lg mx-auto align-middle justify-center p-10">
            <div className=" ml-16 flex relative">
              <img src={Elipe} alt="elipe" />
              <img
                className=" absolute  left-7 bottom-8"
                src={Chekmark}
                alt="chekmark"
              />
            </div>
            <h1 className="text-[32px]/[43,65]  font-bold mx-auto mt-10 mb-5">
              Congratulations!
            </h1>
            <p className=" font-normal text-[14px]/[19,1px] text-myColorsGrey-100 text-center">
              Your password was successfully changed!
            </p>
            <p className=" font-normal text-[14px]/[19,1px] text-myColorsGrey-100 text-center">
              Sign In and continue your journey with us.
            </p>
            <button
              className=" text-[16px]/[21,82px] p-4  my-5 rounded-lg bg-myColors-100 text-white w-[248px]"
              onClick={handleLinkToSignIn}
            >
              Go to Sign In
            </button>
          </div>
        )}

        <div className=" text-[11px]/[15px] text-center mx-auto fixed bottom-7 pl-10">
          <p className="  ">
            By signing up to create an account I accept Company’s
          </p>
          <p className=" font-bold "> Terms of use & Privacy Policy.</p>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;

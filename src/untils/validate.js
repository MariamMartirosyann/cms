export const checkEmail = (email) => {
  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  if (!isEmailValid) return "Email ID is not valid";

  return null;
};

export const checkPassword = (password) => {
  const isPasswordValid =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>~`_\-+=\\[\]\/])[A-Za-z\d!@#$%^&*(),.?":{}|<>~`_\-+=\\[\]\/]{8,32}$/.test(
      password
    );

  if (!isPasswordValid) return "Password is not valid";
  return null;
};



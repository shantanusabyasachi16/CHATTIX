export const usernameValidator = (username) => {
  const regex = /^[A-Za-z]+$/;
  if (regex.test(username)) {
    return { isValid: true, errorMessage: "" };
  } else {
    return { isValid: false, errorMessage: "Username is Invalid. Only letters are allowed." };
  }
};
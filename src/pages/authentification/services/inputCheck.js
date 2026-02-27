import validator from "validator";

const loginInputCheck = (loginData, setLoginData) => {
  let response = false;
  switch (true) {
    case loginData.email.value.length == 0:
      setLoginData({
        ...loginData,
        email: { ...loginData.email, error: "please enter your email here" },
        password: { ...loginData.password, error: "" },
      });
      break;

    case loginData.password.value.length == 0:
      setLoginData({
        ...loginData,
        password: {
          ...loginData.password,
          error: "Please enter your password",
        },
        email: { ...loginData.email, error: "" },
      });

      break;

    case !validator.isEmail(loginData.email.value):
      setLoginData({
        ...loginData,
        email: {
          ...loginData.email,
          error: "please enter a valide email address",
        },
        password: { ...loginData.password, error: "" },
      });
      break;

    case loginData.password.value.length < 6:
      setLoginData({
        ...loginData,
        password: {
          ...loginData.password,
          error: "Your password should be more 5 characters",
        },
        email: { ...loginData.email, error: "" },
      });

      break;

    default:
      response = true;
      break;
  }
  return response;
};

const registerInputCheck = (registerData, setResgisterData) => {
  let res = false;

  switch (true) {
    case registerData.firstName.value.length == 0:
      setResgisterData({
        ...registerData,
        firstName: {
          ...registerData.firstName,
          error: "Please enter your first name",
        },
        secondName: { ...registerData.secondName, error: "" },
        email: { ...registerData.email, error: "" },
        phoneNumber: { ...registerData.phoneNumber, error: "" },
        password: { ...registerData.password, error: "" },
      });
      break;
    case registerData.secondName.value.length == 0:
      setResgisterData({
        ...registerData,
        secondName: {
          ...registerData.secondName,
          error: "Please enter your second name",
        },
        firstName: { ...registerData.firstName, error: "" },
        email: { ...registerData.email, error: "" },
        phoneNumber: { ...registerData.phoneNumber, error: "" },
        password: { ...registerData.password, error: "" },
      });
      break;

    case registerData.email.value.length == 0:
      setResgisterData({
        ...registerData,
        email: {
          ...registerData.email,
          error: "Please enter your email address",
        },
        firstName: { ...registerData.firstName, error: "" },
        secondName: { ...registerData.secondName, error: "" },
        phoneNumber: { ...registerData.phoneNumber, error: "" },
        password: { ...registerData.password, error: "" },
      });
      break;

    case !validator.isEmail(registerData.email.value):
      setResgisterData({
        ...registerData,
        email: {
          ...registerData.email,
          error: "Please enter a valid email address",
        },
        firstName: { ...registerData.firstName, error: "" },
        secondName: { ...registerData.secondName, error: "" },
        phoneNumber: { ...registerData.phoneNumber, error: "" },
        password: { ...registerData.password, error: "" },
      });
      break;

    case registerData.phoneNumber.value.length == 0:
      setResgisterData({
        ...registerData,
        phoneNumber: {
          ...registerData.phoneNumber,
          error: "Please enter your phone number ex: +4407 45...",
        },
        firstName: { ...registerData.firstName, error: "" },
        secondName: { ...registerData.secondName, error: "" },
        email: { ...registerData.email, error: "" },
        password: { ...registerData.password, error: "" },
      });
      break;

    case !validator.isMobilePhone(registerData.phoneNumber.value):
      setResgisterData({
        ...registerData,
        phoneNumber: {
          ...registerData.phoneNumber,
          error: "Please enter a valid phone number ex: +4407 45...",
        },
        firstName: { ...registerData.firstName, error: "" },
        secondName: { ...registerData.secondName, error: "" },
        email: { ...registerData.email, error: "" },
        password: { ...registerData.password, error: "" },
      });
      break;

    case registerData.password.value.length < 6:
      setResgisterData({
        ...registerData,
        password: {
          ...registerData.password,
          error: "Please your password should be more than 5 digits",
        },
        firstName: { ...registerData.firstName, error: "" },
        secondName: { ...registerData.secondName, error: "" },
        email: { ...registerData.email, error: "" },
        phoneNumber: { ...registerData.phoneNumber, error: "" },
      });
      break;

    default:
      res = true;
  }

  return res;
};

export { loginInputCheck, registerInputCheck };

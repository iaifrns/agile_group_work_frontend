import "./login.css";
import pana from "../assets/pana.svg";
import Mail from "../assets/icons/mail";
import CustomInput, { CustomInputPassword } from "./components/input";
import PasswordIcon from "../assets/icons/password";
import { CustomButton } from "./components/button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { loginInputCheck } from "./services/inputCheck";

const Login = () => {
  const navigateTo = useNavigate();

  const [loginData, setLoginData] = useState({
    email: {
      value: "",
      error: "",
    },
    password: {
      value: "",
      error: "",
    },
  });

  const submit = () => {
    const isDataOk = loginInputCheck(loginData, setLoginData)

    if(isDataOk) {
      navigateTo('/profile')
    }
  };

  return (
    <div class="container">
      <div class="left-side">
        <div class="illustration">
          <img src={pana} alt="Security Illustration" />
        </div>
        <h1>
          Together as a team, every challenge
          <br />
          becomes an opportunity to succeed
        </h1>
      </div>

      <div class="right-side">
        <h2>Student Group Work</h2>
        <p class="h1">Welcome back!</p>
        <p class="subtitle">
          Enter your email address and password to access admin panel.
        </p>

        <div id="loginForm">
          <CustomInput
            Icon={Mail}
            label={"Email Address:"}
            placeholder={"student@aber.ac.uk"}
            type={"email"}
            setValue={(e) =>
              setLoginData({
                ...loginData,
                email: { ...loginData.email, value: e },
              })
            }
            value={loginData.email.value}
            error={loginData.email.error}
          />
          <CustomInputPassword
            Icon={PasswordIcon}
            label={"Password :"}
            placeholder={"********"}
            setValue={(e) =>
              setLoginData({
                ...loginData,
                password: { ...loginData.password, value: e },
              })
            }
            value={loginData.password.value}
            error={loginData.password.error}
          />

          <CustomButton text={"Login"} submit={submit} />
        </div>

        <div class="signup-link">
          Don't have an account?{" "}
          <a onClick={() => navigateTo("/register")}>Sign Up</a>
        </div>
      </div>
    </div>
  );
};

export default Login;

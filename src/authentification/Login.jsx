import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Mail from "../assets/icons/mail";
import PasswordIcon from "../assets/icons/password";
import pana from "../assets/pana.svg";
import { CustomButton } from "./components/button";
import CustomInput, { CustomInputPassword } from "./components/input";
import "./login.css";
import { loginInputCheck } from "./services/inputCheck";
import { loginUser } from "./services/login";
import { Context } from "../hooks/useContext";

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

  const { handleId } = useContext(Context);

  const [status, setStatus] = useState("");
  const [errMess, setErrMes] = useState("");

  const submit = () => {
    const isDataOk = loginInputCheck(loginData, setLoginData);

    if (isDataOk) {
      loginUser(
        { email: loginData.email.value, password: loginData.password.value },
        setErrMes,
        setStatus,
        handleId,
        navigateTo
      );
    }
  };

  return (
    <div className="body">
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
          <p className="error_message1">{errMess}</p>
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

            <CustomButton text={"Login"} submit={submit} status={status} />
          </div>

          <div class="signup-link">
            Don't have an account?{" "}
            <a onClick={() => navigateTo("/register")}>Sign Up</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Mail from "../../assets/icons/mail";
import PasswordIcon from "../../assets/icons/password";
import pana from "../../assets/pana.svg";
import { Context } from "../../hooks/useContext";
import { CustomButton } from "./components/button";
import CustomInput, { CustomInputPassword } from "./components/input";
import "./css/login.css";
import { loginInputCheck } from "./services/inputCheck";
import { loginUser } from "./services/login";

const Login = () => {
  const navigateTo = useNavigate();
  const [status, setStatus] = useState();
  const [errMes, setErrMes] = useState();

  const { handleId, setStudentGroups } = useContext(Context);

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

  const submit = async () => {
    const isInputDataOk = loginInputCheck(loginData, setLoginData);
    if (isInputDataOk) {
      await loginUser(
        {
          email: loginData.email.value,
          password: loginData.password.value,
        },
        setErrMes,
        setStatus,
        handleId,
        navigateTo,
        setStudentGroups
      );
    }
  };

  return (
    <div className="container">
      <div className="left-side">
        <div className="illustration">
          <img src={pana} alt="Security Illustration" />
        </div>
        <h1>
          Together as a team, every challenge
          <br />
          becomes an opportunity to succeed
        </h1>
      </div>

      <div className="right-side">
        <h2>Student Group Work</h2>
        <p className="h1">Welcome back!</p>
        <p className="subtitle">
          Enter your email address and password to access admin panel.
        </p>
        <p className="error_message1">{errMes}</p>
        <div id="loginForm">
          <CustomInput
            Icon={Mail}
            label={"Email Address:"}
            placeholder={"student@aber.ac.uk"}
            type={"email"}
            value={loginData.email.value}
            onChange={(e) =>
              setLoginData({
                ...loginData,
                email: { ...loginData.email, value: e.target.value },
              })
            }
            e={loginData.email.error}
          />

          <CustomInputPassword
            Icon={PasswordIcon}
            label={"Password :"}
            placeholder={"********"}
            value={loginData.password.value}
            onChange={(e) =>
              setLoginData({
                ...loginData,
                password: { ...loginData.password, value: e.target.value },
              })
            }
            e={loginData.password.error}
          />

          <CustomButton text={"Login"} submit={submit} status={status} />
        </div>

        <div className="signup-link">
          Don't have an account?{" "}
          <a onClick={() => navigateTo("/register")}>Sign Up</a>
        </div>
      </div>
    </div>
  );
};

export default Login;

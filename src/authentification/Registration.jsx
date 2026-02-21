import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Mail from "../assets/icons/mail";
import PasswordIcon from "../assets/icons/password";
import Person from "../assets/icons/person";
import Phone from "../assets/icons/phone";
import pana from "../assets/pana1.svg";
import { CustomButton } from "./components/button";
import CustomInput, { CustomInputPassword } from "./components/input";
import "./css/login.css";
import { registerInputCheck } from "./services/inputCheck";
import { registerUser } from "./services/register";

const Registration = () => {
  const navigateTo = useNavigate();

  const [registerData, setRegisterData] = useState({
    email: {
      value: "",
      error: "",
    },
    password: {
      value: "",
      error: "",
    },
    firstName: {
      value: "",
      error: "",
    },
    secondName: {
      value: "",
      error: "",
    },
    phoneNumber: {
      value: "",
      error: "",
    },
  });
  
  const [status, setStatus] = useState("");
  const [error, setError] = useState("");

  const submit = () => {
    let isDataOk = registerInputCheck(registerData, setRegisterData);

    if (isDataOk) {
      registerUser(
        {
          firstName: registerData.firstName.value,
          lastName: registerData.secondName.value,
          email: registerData.email.value,
          password: registerData.password.value,
          phoneNumber: registerData.phoneNumber.value,
        },
        setError,
        setStatus,
        navigateTo,
      );
    }
  };

  return (
    <div className="body">
      <div class="container">
        <div class="right-side">
          <h2>Student Group Work</h2>
          <p class="h1">Welcome to the account page!</p>
          <p class="subtitle">
            Enter the information below to create your account
          </p>
          <p className="error_message1">{error}</p>
          <div id="loginForm">
            <div className="name">
              <CustomInput
                Icon={Person}
                label={"First Name :"}
                placeholder={"Enter your fist name"}
                setValue={(e) =>
                  setRegisterData({
                    ...registerData,
                    firstName: { ...registerData.firstName, value: e },
                  })
                }
                value={registerData.firstName.value}
                error={registerData.firstName.error}
              />
              <CustomInput
                Icon={Person}
                label={"Second Name :"}
                placeholder={"Enter your second name"}
                setValue={(e) =>
                  setRegisterData({
                    ...registerData,
                    secondName: { ...registerData.secondName, value: e },
                  })
                }
                value={registerData.secondName.value}
                error={registerData.secondName.error}
              />
            </div>
            <CustomInput
              Icon={Mail}
              label={"Email Address:"}
              placeholder={"student@aber.ac.uk"}
              type={"email"}
              setValue={(e) =>
                setRegisterData({
                  ...registerData,
                  email: { ...registerData.email, value: e },
                })
              }
              value={registerData.email.value}
              error={registerData.email.error}
            />

            <CustomInput
              Icon={Phone}
              label={"Phone Number:"}
              placeholder={"+44070 000 000"}
              setValue={(e) =>
                setRegisterData({
                  ...registerData,
                  phoneNumber: { ...registerData.phoneNumber, value: e },
                })
              }
              value={registerData.phoneNumber.value}
              error={registerData.phoneNumber.error}
            />

            <CustomInputPassword
              Icon={PasswordIcon}
              label={"Password :"}
              placeholder={"********"}
              setValue={(e) =>
                setRegisterData({
                  ...registerData,
                  password: { ...registerData.password, value: e },
                })
              }
              value={registerData.password.value}
              error={registerData.password.error}
            />

            <CustomButton
              text={"Create Account"}
              submit={submit}
              status={status}
            />
          </div>

          <div class="signup-link">
            Already have an account?{" "}
            <a onClick={() => navigateTo("/login")}>Sign In</a>
          </div>
        </div>
        <div class="left-side">
          <div class="illustration">
            <img src={pana} alt="Security Illustration" />
          </div>
          <h1>
            join our great application made by <br /> the best engineers in Aber
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Registration;

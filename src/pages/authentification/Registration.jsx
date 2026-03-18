import "./css/login.css";
import pana from "../../assets/pana1.svg";
import Mail from "../../assets/icons/mail";
import CustomInput, { CustomInputPassword } from "./components/input";
import PasswordIcon from "../../assets/icons/password";
import { CustomButton } from "./components/button";
import Person from "../../assets/icons/person";
import Phone from "../../assets/icons/phone";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { registerInputCheck } from "./services/inputCheck";
import { registerUser } from "./services/register";
import { Context } from "../../hooks/useContext";

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
    confirmPassword: {
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
  const [status, setStatus] = useState();
  const [error, setError] = useState();

  const {handleId} = useContext(Context)

  const handleSubmit = async () => {
    const isInputOk = registerInputCheck(registerData, setRegisterData);

    if (isInputOk) {
      await registerUser(
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
        handleId,
      );
    }
  };

  return (
    <div className="container">
      <div className="right-side">
        <h2>Student Group Work</h2>
        <p className="h1">Welcome to the account page!</p>
        <p className="subtitle">
          Enter the information below to create your account
        </p>
        <p className="error_message1">{error}</p>

        <div id="loginForm">
          <div className="name">
            <CustomInput
              Icon={Person}
              label={"First Name :"}
              placeholder={"Enter your fist name"}
              value={registerData.firstName.value}
              onChange={(e) =>
                setRegisterData({
                  ...registerData,
                  firstName: {
                    ...registerData.firstName,
                    value: e.target.value,
                  },
                })
              }
              e={registerData.firstName.error}
            />
            <CustomInput
              Icon={Person}
              label={"Second Name :"}
              placeholder={"Enter your second name"}
              value={registerData.secondName.value}
              onChange={(e) =>
                setRegisterData({
                  ...registerData,
                  secondName: {
                    ...registerData.secondName,
                    value: e.target.value,
                  },
                })
              }
              e={registerData.secondName.error}
            />
          </div>
          <CustomInput
            Icon={Mail}
            label={"Email Address:"}
            placeholder={"student@aber.ac.uk"}
            type={"email"}
            value={registerData.email.value}
            onChange={(e) =>
              setRegisterData({
                ...registerData,
                email: {
                  ...registerData.email,
                  value: e.target.value,
                },
              })
            }
            e={registerData.email.error}
          />

          <CustomInput
            Icon={Phone}
            label={"Phone Number:"}
            placeholder={"+44070 000 000"}
            value={registerData.phoneNumber.value}
            onChange={(e) =>
              setRegisterData({
                ...registerData,
                phoneNumber: {
                  ...registerData.phoneNumber,
                  value: e.target.value,
                },
              })
            }
            e={registerData.phoneNumber.error}
          />

          <CustomInputPassword
            Icon={PasswordIcon}
            label={"Password :"}
            placeholder={"********"}
            value={registerData.password.value}
            onChange={(e) =>
              setRegisterData({
                ...registerData,
                password: {
                  ...registerData.password,
                  value: e.target.value,
                },
              })
            }
            e={registerData.password.error}
          />

          <CustomInputPassword
            Icon={PasswordIcon}
            label={"Confirm Password :"}
            placeholder={"********"}
            value={registerData.confirmPassword.value}
            onChange={(e) =>
              setRegisterData({
                ...registerData,
                confirmPassword: {
                  ...registerData.confirmPassword,
                  value: e.target.value,
                },
              })
            }
            e={registerData.confirmPassword.error}
          />

          <CustomButton
            text={"Create Account"}
            submit={handleSubmit}
            status={status}
          />
        </div>

        <div className="signup-link">
          Already have an account?{" "}
          <a onClick={() => navigateTo("/login")}>Sign In</a>
        </div>
      </div>
      <div className="left-side">
        <div className="illustration">
          <img src={pana} alt="Security Illustration" />
        </div>
        <h1>
          join our great application made by <br /> the best engineers in Aber
        </h1>
      </div>
    </div>
  );
};

export default Registration;

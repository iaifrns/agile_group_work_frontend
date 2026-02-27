import "./css/login.css";
import pana from "../../assets/pana1.svg";
import Mail from "../../assets/icons/mail";
import CustomInput, { CustomInputPassword } from "./components/input";
import PasswordIcon from "../../assets/icons/password";
import { CustomButton } from "./components/button";
import Person from "../../assets/icons/person";
import Phone from "../../assets/icons/phone";
import { useNavigate } from "react-router-dom";

const Registration = () => {
  const navigateTo = useNavigate()
  return (
    <div className="container">
      <div className="right-side">
        <h2>Student Group Work</h2>
        <p className="h1">Welcome to the account page!</p>
        <p className="subtitle">
          Enter the information below to create your account
        </p>

        <div id="loginForm">
          <div className="name">
            <CustomInput
              Icon={Person}
              label={"First Name :"}
              placeholder={"Enter your fist name"}
            />
            <CustomInput
              Icon={Person}
              label={"Second Name :"}
              placeholder={"Enter your second name"}
            />
          </div>
          <CustomInput
            Icon={Mail}
            label={"Email Address:"}
            placeholder={"student@aber.ac.uk"}
            type={'email'}
          />

          <CustomInput
            Icon={Phone}
            label={"Phone Number:"}
            placeholder={"+44070 000 000"}
          />

          <CustomInputPassword
            Icon={PasswordIcon}
            label={"Password :"}
            placeholder={"********"}
          />

          <CustomButton text={"Create Account"} />
        </div>

        <div className="signup-link">
          Already have an account? <a onClick={()=>navigateTo('/login')}>Sign In</a>
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

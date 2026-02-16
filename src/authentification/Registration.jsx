import "./login.css";
import pana from "../assets/pana1.svg";
import Mail from "../assets/icons/mail";
import CustomInput, { CustomInputPassword } from "./components/input";
import PasswordIcon from "../assets/icons/password";
import { CustomButton } from "./components/button";
import Person from "../assets/icons/person";
import Phone from "../assets/icons/phone";

const Registration = () => {
  return (
    <div class="container">
      <div class="right-side">
        <h2>Student Group Work</h2>
        <p class="h1">Welcome to the account page!</p>
        <p class="subtitle">
          Enter the information below to create your account
        </p>

        <form id="loginForm">
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
        </form>

        <div class="signup-link">
          Already have an account? <a href="create_account.html">Sign In</a>
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
  );
};

export default Registration;

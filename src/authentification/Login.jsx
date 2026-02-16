import "./login.css";
import pana from "../assets/pana.svg";
import Mail from "../assets/icons/mail";
import CustomInput, { CustomInputPassword } from "./components/input";
import PasswordIcon from "../assets/icons/password";
import { CustomButton } from "./components/button";

const Login = () => {
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

        <form id="loginForm">
          <CustomInput
            Icon={Mail}
            label={"Email Address:"}
            placeholder={"student@aber.ac.uk"}
            type={'email'}
          />

          <CustomInputPassword
            Icon={PasswordIcon}
            label={"Password :"}
            placeholder={"********"}
          />

          <CustomButton text={"Login"} />
        </form>

        <div class="signup-link">
          Don't have an account? <a href="create_account.html">Sign Up</a>
        </div>
      </div>
    </div>
  );
};

export default Login;

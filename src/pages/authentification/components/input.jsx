import "../css/login.css";
  {/* This file contains the CustomInput and CustomInputPassword components, which are used to render the input fields in the login and registration page, it will display the error message when there is any error in the input, and also display the icon in the input field */}
const CustomInput = ({
  Icon,
  label,
  placeholder,
  type,
  value,
  onChange,
  e,
}) => {
  return (
    <div className="form-group">
      <label for="email">{label}</label>
      <div className="input-wrapper">
        <span className="mail-icon">
          <Icon />
        </span>
        <input
          type={type ? type : "text"}
          id="email"
          placeholder={placeholder}
          required
          value={value}
          onChange={onChange}
        />
      </div>
      <p className="error_message">{e}</p>
    </div>
  );
};
  {/* CustomInputPassword component is used to render the password input field in the login and registration page, it will display the error message when there is any error in the input, and also display the icon in the input field */}
export const CustomInputPassword = ({
  Icon,
  label,
  placeholder,
  value,
  onChange,
  e,
}) => {
  return (
    <div className="form-group">
      <label for="password">{label}</label>
      <div className="input-wrapper password-wrapper">
        <span className="mail-icon">
          <Icon />
        </span>
        <input
          type="password"
          id="password"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required
        />
      </div>
      <p className="error_message">{e}</p>
    </div>
  );
};

export default CustomInput;

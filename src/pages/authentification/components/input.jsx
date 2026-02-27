import "../css/login.css";

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

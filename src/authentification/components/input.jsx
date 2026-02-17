import "../login.css";

const CustomInput = ({
  Icon,
  label,
  placeholder,
  type,
  value,
  setValue,
  error,
}) => {
  return (
    <div class="form-group">
      <label for="email">{label}</label>
      <div class="input-wrapper">
        <span class="mail-icon">
          <Icon />
        </span>
        <input
          type={type ? type : "text"}
          id="email"
          placeholder={placeholder}
          required
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
      <p className="error_message">{error}</p>
    </div>
  );
};

export const CustomInputPassword = ({
  Icon,
  label,
  placeholder,
  value,
  setValue,
  error,
}) => {
  return (
    <div class="form-group">
      <label for="password">{label}</label>
      <div class="input-wrapper password-wrapper">
        <span class="mail-icon">
          <Icon />
        </span>
        <input
          type="password"
          id="password"
          placeholder={placeholder}
          required
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
      <p className="error_message">{error}</p>
    </div>
  );
};

export default CustomInput;

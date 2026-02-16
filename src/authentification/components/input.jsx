import "../login.css";

const CustomInput = ({ Icon, label, placeholder }) => {
  return (
    <div class="form-group">
      <label for="email">{label}</label>
      <div class="input-wrapper">
        <span class="mail-icon">
          <Icon />
        </span>
        <input
          type="email"
          id="email"
          placeholder={placeholder}
          required
        />
      </div>
    </div>
  );
};

export const CustomInputPassword = ({ Icon, label, placeholder }) => {
  return (
    <div class="form-group">
      <label for="password">{label}</label>
      <div class="input-wrapper password-wrapper">
        <span class="mail-icon">
          <Icon />
        </span>
        <input type="password" id="password" placeholder={placeholder} required />
      </div>
    </div>
  );
};

export default CustomInput;

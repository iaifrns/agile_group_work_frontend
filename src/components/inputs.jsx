import "../css/input.css";

export const InputWithIconOnRight = ({ Icon, placeholder, value, onchange }) => {
  return (
    <div className="input_with_icon_container">
      <input
        type="text"
        className="input_no_design"
        placeholder={placeholder}
        value={value}
        onChange={(e)=>onchange(e.target.value)}
      />
      <Icon />
    </div>
  );
};

import "../css/input.css";
  {/* This file contains the InputWithIconOnRight component, which is used to render the input field with an icon on the right side, it will display the icon on the right side of the input field, and also display the placeholder text in the input field */}
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

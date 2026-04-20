import "../css/button.css";
  {/* This file contains the ButtonWithIconOnLeft component, which is used to render the button with an icon on the left side, it will display the icon on the left side of the button, and also display the button text on the right side of the button */}
export const ButtonWithIconOnLeft = ({ text, Icon, onclick }) => {
  return (
    <button className="default button_with_icon" onClick={onclick}>
      <Icon c="white" />
      <p>{text}</p>
    </button>
  );
};

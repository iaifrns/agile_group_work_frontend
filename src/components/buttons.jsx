import "../css/button.css";

export const ButtonWithIconOnLeft = ({ text, Icon, onclick }) => {
  return (
    <button className="default button_with_icon" onClick={onclick}>
      <Icon c="white" />
      <p>{text}</p>
    </button>
  );
};

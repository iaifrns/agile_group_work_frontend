import "../css/button.css";

export const ButtonWithIconOnLeft = ({ text, Icon }) => {
  return (
    <button className="default button_with_icon">
      <Icon c="white" />
      <p>{text}</p>
    </button>
  );
};

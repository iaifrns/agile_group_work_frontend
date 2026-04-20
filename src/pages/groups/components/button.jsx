  {/* This is a custom button component, it receives text, color and onclick function as props, and render a button with the text and color, and trigger the onclick function when the button is clicked */}
export const CustomButton = ({ text, color, onclick }) => {
  return (
    <button
      style={{ backgroundColor: color, padding: "16px", width: "160px", border: 'none', borderRadius: '8px', color:'white', fontWeight: 'bold' }}
      onClick={onclick}
    >
      {text}
    </button>
  );
};

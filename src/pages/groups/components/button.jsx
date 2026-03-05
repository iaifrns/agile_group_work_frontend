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

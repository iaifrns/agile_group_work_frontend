import React from "react";

const AddIcon = ({ c }) => {
  let color = c ? c : "#5F6388";
  return (
    <svg
      width="17"
      height="18"
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20 11.9286H11.4286V20.5H8.57143V11.9286H0V9.07143H8.57143V0.5H11.4286V9.07143H20V11.9286Z"
        fill={color}
      />
    </svg>
  );
};

export default AddIcon;

import React from "react";
  {/* This file contains the EditIcon component, which is used to render the edit icon in the task detail page, it will display the edit icon with the specified color, if no color is specified, it will use the default color */}
const EditIcon = ({ c }) => {
  let color = c ? c : "#5F6388";
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <g
        fill="none"
        stroke={color}
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
      >
        <path d="M7 7H6a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-1" />
        <path d="M20.385 6.585a2.1 2.1 0 0 0-2.97-2.97L9 12v3h3zM16 5l3 3" />
      </g>
    </svg>
  );
};

export default EditIcon;

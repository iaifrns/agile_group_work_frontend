import React from "react";
  {/* This file contains the NotificationIcon component, which is used to render the notification icon in the sidebar, it will display the notification icon with the specified color, if no color is specified, it will use the default color */}
const NotificationIcon = ({ c }) => {
  let color = c ? c : "#5F6388";
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <g fill="none" stroke={color} stroke-width="1.5">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M6 19v-9a6 6 0 0 1 6-6v0a6 6 0 0 1 6 6v9M6 19h12M6 19H4m14 0h2m-9 3h2"
        />
        <circle cx="12" cy="3" r="1" />
      </g>
    </svg>
  );
};

export default NotificationIcon;

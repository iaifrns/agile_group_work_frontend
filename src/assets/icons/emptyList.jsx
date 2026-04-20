  {/* This file contains the EmptyListIcon component, which is used to render the empty list icon in the empty list page, it will display the empty list icon with the specified color, if no color is specified, it will use the default color */}
const EmptyListIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="154"
      height="154"
      viewBox="0 0 14 14"
    >
      <g
        fill="none"
        stroke="white"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1"
      >
        <path d="M8.5.5h-3a1 1 0 0 0-1 1V2a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-.5a1 1 0 0 0-1-1" />
        <path d="M9.75 1.5h1.5a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-8.5a1 1 0 0 1-1-1v-10a1 1 0 0 1 1-1h1.5" />
      </g>
    </svg>
  );
};

export default EmptyListIcon;

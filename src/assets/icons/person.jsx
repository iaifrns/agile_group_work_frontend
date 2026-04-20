  {/* This file contains the Phone component, which is used to render the phone icon in the contact page, it will display the phone icon with the specified color, if no color is specified, it will use the default color */}
const Person = ({ color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      color={!color ? "#40444b" : color}
    >
      <circle cx="12" cy="6" r="4" fill="currentColor" />
      <path
        fill="currentColor"
        d="M20 17.5c0 2.485 0 4.5-8 4.5s-8-2.015-8-4.5S7.582 13 12 13s8 2.015 8 4.5"
      />
    </svg>
  );
};

export default Person;

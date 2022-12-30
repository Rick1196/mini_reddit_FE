import React from "react";
const Logo = ({ props }) => {
  return (
    <svg
      width="24"
      height="33"
      viewBox="0 0 24 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M22.5 11.5H1V32.5H22.5V11.5Z" stroke="black" />
      <path d="M11 11.5V2.5H20.5M20.5 2.5V4.5H23V1H20.5V2.5Z" stroke="black" />
      <path d="M8 17H4V21H8V17Z" stroke="black" />
      <path d="M20 17H16V21H20V17Z" stroke="black" />
      <path d="M6 26V29H18.5V25.5" stroke="black" />
    </svg>
  );
};

export default Logo;

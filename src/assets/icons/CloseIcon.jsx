import React from "react";

const CloseIcon = ({ className, color="#5F6273", strokeWidth="1.25", onClick }) => (
  <i onClick={onClick} className={className}>
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.5 11.5L4.5 4.5"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.5 4.5L4.5 11.5"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </i>
);

export default CloseIcon;

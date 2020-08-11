import React from "react";

const LeftArrowIcon = ({
  className,
  color = "#5F6273",
  strokeWidth = "1.25",
}) => (
  <i className={className}>
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.3625 14.0625L6.30005 9L11.3625 3.9375"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
        stroke={color}
      />
    </svg>
  </i>
);

export default LeftArrowIcon;

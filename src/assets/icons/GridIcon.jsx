import React from "react";

const GridIcon = ({
  className,
  color = "#5F6273",
  strokeWidth = "1.25",
  filled = true,
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
        d="M7.17188 1.6875H2.39062C2.0023 1.6875 1.6875 2.0023 1.6875 2.39062V7.17188C1.6875 7.5602 2.0023 7.875 2.39062 7.875H7.17188C7.5602 7.875 7.875 7.5602 7.875 7.17188V2.39062C7.875 2.0023 7.5602 1.6875 7.17188 1.6875Z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill={filled ? color : "none"}
      />
      <path
        d="M15.6094 1.6875H10.8281C10.4398 1.6875 10.125 2.0023 10.125 2.39062V7.17188C10.125 7.5602 10.4398 7.875 10.8281 7.875H15.6094C15.9977 7.875 16.3125 7.5602 16.3125 7.17188V2.39062C16.3125 2.0023 15.9977 1.6875 15.6094 1.6875Z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill={filled ? color : "none"}
      />
      <path
        d="M7.17188 10.125H2.39062C2.0023 10.125 1.6875 10.4398 1.6875 10.8281V15.6094C1.6875 15.9977 2.0023 16.3125 2.39062 16.3125H7.17188C7.5602 16.3125 7.875 15.9977 7.875 15.6094V10.8281C7.875 10.4398 7.5602 10.125 7.17188 10.125Z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill={filled ? color : "none"}
      />
      <path
        d="M15.6094 10.125H10.8281C10.4398 10.125 10.125 10.4398 10.125 10.8281V15.6094C10.125 15.9977 10.4398 16.3125 10.8281 16.3125H15.6094C15.9977 16.3125 16.3125 15.9977 16.3125 15.6094V10.8281C16.3125 10.4398 15.9977 10.125 15.6094 10.125Z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill={filled ? color : "none"}
      />
    </svg>
  </i>
);

export default GridIcon;

import React from "react";

const ShareIcon = ({ className, color = "#5F6273", strokeWidth = "1.25" }) => (
  <i className={className}>
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.5 10.6875C5.43198 10.6875 6.1875 9.93198 6.1875 9C6.1875 8.06802 5.43198 7.3125 4.5 7.3125C3.56802 7.3125 2.8125 8.06802 2.8125 9C2.8125 9.93198 3.56802 10.6875 4.5 10.6875Z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.5 5.625C14.432 5.625 15.1875 4.86948 15.1875 3.9375C15.1875 3.00552 14.432 2.25 13.5 2.25C12.568 2.25 11.8125 3.00552 11.8125 3.9375C11.8125 4.86948 12.568 5.625 13.5 5.625Z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.5 15.75C14.432 15.75 15.1875 14.9945 15.1875 14.0625C15.1875 13.1305 14.432 12.375 13.5 12.375C12.568 12.375 11.8125 13.1305 11.8125 14.0625C11.8125 14.9945 12.568 15.75 13.5 15.75Z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.9705 9.82723L12.0293 13.2353"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.0293 4.76473L5.9705 8.17277"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </i>
);

export default ShareIcon;

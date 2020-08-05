import React from "react";

import "./Button.scss";

const Button = ({
  children,
  icon,
  size = "medium",
  variant = "filled",
  color = "primary",
  onClick,
  className,
}) => {
  return (
    <button
      className={`btn btn--${size} btn--${variant}--${color} ${!children ? 'btn--icon-only' : ''} ${className}`}
      onClick={onClick}
    >
      {icon ? icon : null}
      <span>{children}</span>
    </button>
  );
};

export default Button;

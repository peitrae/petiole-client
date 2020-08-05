import React from "react";

import "./Button.scss";

const Button = ({
  children,
  size = "medium",
  variant = "filled",
  color = "primary",
  onClick,
  className,
  iconOnly,
}) => {
  return (
    <button
      className={`btn btn--${size} btn--${variant}--${color} ${className}`}
      onClick={onClick}
    >
      <div className={!iconOnly ? "btn__margin-helper" : ""}>{children}</div>
    </button>
  );
};

export default Button;

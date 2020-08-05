import React from "react";

import "./Card.scss";

const Card = ({ children, className, onHover }) => (
  <div
    className={`card ${className}`}
    onMouseEnter={onHover}
    onMouseLeave={onHover}
  >
    {children}
  </div>
);

export default Card;

import React, { forwardRef } from "react";

import "./Card.scss";

const Card = forwardRef(({ children, className, onHover }, ref) => (
  <div
    ref={ref}
    className={`card ${className}`}
    onMouseEnter={onHover}
    onMouseLeave={onHover}
  >
    {children}
  </div>
));

export default Card;

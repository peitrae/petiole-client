import React, { useState } from "react";

import "./Label.scss";
import CloseIcon from "../../../../../../assets/icons/CloseIcon";

const Label = ({ children }) => {
  const [showIcon, setShowIcon] = useState(false);

  const showIconHandler = () => setShowIcon(!showIcon);

  return (
    <button
      className="note_label"
      onMouseEnter={showIconHandler}
      onMouseLeave={showIconHandler}
    >
      <span className="note_label__text">{children}</span>
      {showIcon ? <CloseIcon /> : null}
    </button>
  );
};

export default Label;

// onMouseOver={showIconHandler}
//       onMouseLeave={showIconHandler}

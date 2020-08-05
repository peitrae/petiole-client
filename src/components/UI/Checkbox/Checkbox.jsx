import React from "react";

import "./Checkbox.scss";

const Checkbox = (props) => {

  return (
    <label className={`checkbox ${props.className}`}>
      <input
        type="checkbox"
        checked={props.checked}
        onChange={props.onChange}
        required={props.required}
        disabled={props.disabled}
      />
      {props.children}
      <span className={`checkmark ${props.disabled && `check-disabled`}`} />
    </label>
  );
};

export default Checkbox;

// Props

// checked: Bool
// onChange: func
// required: Bool

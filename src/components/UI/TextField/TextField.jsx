import React, { useRef, useState } from "react";

import ConditionalTag from "./components/ConditionalTag/ConditionalTag";
import useClickOutside from "../../../hooks/useClickOutside";
import "./TextField.scss";

const TextField = ({
  className,
  icon: Icon,
  placeholder,
  size,
  onChange,
  autoFocus,
  onClickOutside = () => {},
  value,
  multiline,
}) => {
  const [isFocus, setIsFocus] = useState(false);

  const containerRef = useRef();
  const inputRef = useRef();

  const focusHandler = () => {
    if (
      document.activeElement === inputRef.current ||
      document.activeElement === containerRef.current
    ) {
      setIsFocus(true);
    } else {
      setIsFocus(false);
    }
  };

  const moveCaretAtEnd = (e) => {
    const temp_value = e.target.value;
    e.target.value = "";
    e.target.value = temp_value;
  };

  useClickOutside(containerRef, () => {
    focusHandler();
    onClickOutside();
  });

  return (
    <div
      ref={containerRef}
      className={`
        input ${className} 
        ${size ? `input--${size}` : ""}
        ${isFocus ? "input--focus" : ""}
      `}
    >
      {Icon ? <Icon i className="input__icon" strokeWidth="1.75px"/> : null}
      <ConditionalTag
        type="text"
        ref={inputRef}
        value={value}
        onClick={focusHandler}
        onChange={onChange}
        className="input__input"
        placeholder={placeholder}
        autoFocus={autoFocus}
        onFocus={moveCaretAtEnd}
        multiline={multiline}
      />
    </div>
  );
};

export default TextField;

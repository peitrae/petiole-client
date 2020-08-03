import React, { useRef, useState } from 'react';

import useClickOutside from '../../../hooks/useClickOutside';
import './TextField.scss';

const TextField = ({ icon, placeholder }) => {
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

  useClickOutside(containerRef, focusHandler);

  return (
    <div
      ref={containerRef}
      className={`input input--medium ${isFocus ? 'input--focus' : null}`}
    >
      {icon ? icon : null}
      <input
        ref={inputRef}
        onClick={focusHandler}
        className="input__input"
        placeholder={placeholder}
      />
    </div>
  );
};

export default TextField;

import React, { useRef } from "react";

import Card from "../../../../../../components/UI/Card/Card";
import CloseButton from "../../../../../../components/CloseButton/CloseButton";
import useClickOutside from "../../../../../../hooks/useClickOutside";
import "./Popup.scss";

const Popup = ({ title, children, onClose }) => {
  
  const popupRef = useRef();

  useClickOutside(popupRef, onClose)

  return (
  <Card ref={popupRef} className="note__popup">
    <div className="note__popup__header">
      <CloseButton className="close-btn" onClick={onClose}/>
      <h4 className="header__title">{title}</h4>
    </div>
    <div className="note__popup__content">{children}</div>
  </Card>
)};

export default Popup;

import React from "react";

import Card from "../Card/Card";
import "./Modal.scss";

const Modal = ({ className, children, onBackdropClick }) => (
  <div className="modal">
    <div className="modal__backdrop" onClick={onBackdropClick} />
    <Card className={`modal__card ${className}`}>{children}</Card>
  </div>
);

export default Modal;

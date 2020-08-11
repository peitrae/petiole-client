import React from "react";

import Button from "../../../../../../../../../../../../components/UI/Button/Button";
import "./Label.scss";

const Label = ({ children, icon: Icon }) => (
  <Button
    size="small"
    variant="text"
    className="recently__label"
    color="secondary"
  >
    <Icon strokeWidth="1px" className="recently__label__icon" />
    {children}
  </Button>
);

export default Label;

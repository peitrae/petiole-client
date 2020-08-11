import React from "react";

import Button from "../../../../../../../../components/UI/Button/Button";
import LeftArrowIcon from "../../../../../../../../assets/icons/LeftArrow";

const BackButton = ({ className, onClick }) => (
  <Button
    size="small"
    variant="text"
    color="secondary"
    className={className}
    onClick={onClick}
    iconOnly
  >
    <LeftArrowIcon />
  </Button>
);

export default BackButton;

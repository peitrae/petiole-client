import React from "react";

import Button from "../../../../../../components/UI/Button/Button";
import CloseIcon from "../../../../../../assets/icons/CloseIcon";

const CloseButton = ({ className, onClick }) => (
  <Button
    size="small"
    variant="text"
    color="secondary"
    className={className}
    icon={<CloseIcon />}
    onClick={onClick}
  />
);

export default CloseButton;

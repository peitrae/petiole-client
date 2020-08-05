import React from "react";

import Button from "../../../../../../../../components/UI/Button/Button";
import "./AddDesc.scss";

const AddDesc = ({ onClick }) => (
  <Button color="secondary" className="note-detail__add__btn" onClick={onClick}>
    Add a more detailed description...
  </Button>
);

export default AddDesc;

import React from "react";

import TextField from "../../../../../../../../components/UI/TextField/TextField";
import Button from "../../../../../../../../components/UI/Button/Button";
import "./DescForm.scss";

const DescForm = ({ value, onChange, onClickOutside }) => {
  return (
    <div className="note-detail__add__form">
      <TextField
        className="note-detail__add__input"
        value={value}
        onChange={onChange}
        onClickOutside={onClickOutside}
        multiline
        autoFocus
        size="medium"
      />
      <div className="note-detail__add__controls">
        <Button>Save</Button>
        <Button variant="text" color="secondary" onClick={onClickOutside}>
          Cancel
        </Button>
      </div>
    </div>
  );
};

export default DescForm;

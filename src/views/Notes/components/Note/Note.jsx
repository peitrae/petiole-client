import React, { useState } from "react";

import Card from "../../../../components/UI/Card/Card";
import Checkbox from "../../../../components/UI/Checkbox/Checkbox";
import Label from "./components/Label/Label";
import "./Note.scss";

const Note = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const hoveredHandler = () => setIsHovered(!isHovered);

  const checkboxChangeHandler = () => setIsChecked(!isChecked);

  return (
    <Card
      className={`note ${isHovered ? "note--hovered" : null}`}
      onHover={hoveredHandler}
    >
      {isChecked || isHovered ? (
        <Checkbox
          checked={isChecked}
          onChange={checkboxChangeHandler}
          className="note__checkmark"
        />
      ) : null}
      <h3 className="note__title">Switch Statement</h3>
      <div className="note__content">Tes</div>
      <div className="note__labels">
        <Label>Javascript</Label>
        <Label>Label 1</Label>
      </div>
    </Card>
  );
};

export default Note;

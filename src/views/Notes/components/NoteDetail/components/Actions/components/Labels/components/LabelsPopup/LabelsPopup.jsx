import React from "react";

import Popup from "../../../../../Popup/Popup";
import TextField from "../../../../../../../../../../components/UI/TextField/TextField";
import Button from "../../../../../../../../../../components/UI/Button/Button";
import Label from "./components/Label/Label";
import "./LabelsPopup.scss";

import LabelIcon from "../../../../../../../../../../assets/icons/LabelIcon";
import AddIcon from "../../../../../../../../../../assets/icons/AddIcon";

const LabelsPopup = ({ onClose, onCreateLabel }) => (
  <Popup title="Labels" onClose={onClose}>
    <div className="labels-popup">
      <TextField size="medium" placeholder="Search" />
      <div className="labels-popup__recently">
        <h5 className="recently__title">Recently Added</h5>
        <Label icon={LabelIcon}>Label 1</Label>
        <Label icon={LabelIcon}>Label 2</Label>
      </div>
    </div>
    <div className="labels-popup__add">
      <Button variant="text" className="add__btn" onClick={onCreateLabel}>
        <AddIcon strokeWidth="2px" color="#3c40c6" />
        Create a new label
      </Button>
    </div>
  </Popup>
);

export default LabelsPopup;

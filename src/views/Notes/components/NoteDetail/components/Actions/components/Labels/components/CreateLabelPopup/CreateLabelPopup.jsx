import React from "react";

import Popup from "../../../../../Popup/Popup";
import TextField from "../../../../../../../../../../components/UI/TextField/TextField";
import Button from "../../../../../../../../../../components/UI/Button/Button";
import "./CreateLabelPopup.scss";

const CreateLabelPopup = ({ onBack, onClose }) => (
  <Popup title="Create Label" onBack={onBack} onClose={onClose}>
    <div className="create-label-popup">
      <TextField size="medium" placeholder="Create a new label" />
      <Button>Create</Button>
    </div>
  </Popup>
);

export default CreateLabelPopup;

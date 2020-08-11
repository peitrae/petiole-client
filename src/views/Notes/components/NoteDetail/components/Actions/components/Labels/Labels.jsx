import React, { useState } from "react";

import Button from "../../../../../../../../components/UI/Button/Button";
import LabelsIcon from "../../../../../../../../assets/icons/LabelsIcon";
import LabelsPopup from "./components/LabelsPopup/LabelsPopup";
import CreateLabelPopup from "./components/CreateLabelPopup/CreateLabelPopup";

const Labels = () => {
  const [showLabelsPopup, setShowLabelsPopup] = useState(false);
  const [showCreateLabelPopup, setShowCreateLabelPopup] = useState(false);

  const showLabelsClickHandler = () => {
    setShowLabelsPopup(!showLabelsPopup);
    setShowCreateLabelPopup(false);
  };

  const showCreateLabelClickHandler = () => {
    setShowCreateLabelPopup(!showCreateLabelPopup);
    setShowLabelsPopup(false);
  };

  return (
    <div className="note-detail__actions__item">
      <Button
        color="secondary"
        className="note-detail__actions__btn"
        onClick={showLabelsClickHandler}
      >
        <LabelsIcon className="note-detail__actions__icon" />
        Labels
      </Button>
      {showLabelsPopup ? (
        <LabelsPopup
          onClose={showLabelsClickHandler}
          onCreateLabel={showCreateLabelClickHandler}
        />
      ) : null}
      {showCreateLabelPopup ? (
        <CreateLabelPopup
          onBack={showLabelsClickHandler}
          onClose={showCreateLabelClickHandler}
        />
      ) : null}
    </div>
  );
};

export default Labels;

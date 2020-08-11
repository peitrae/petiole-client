import React, { useState } from "react";

import Button from "../../../../../../../../components/UI/Button/Button";
import LabelsIcon from "../../../../../../../../assets/icons/LabelsIcon";
import LabelsPopup from "./components/LabelsPopup/LabelsPopup";

const Labels = () => {
  const [showLabelsPopup, setShowLabelsPopup] = useState(false);

  const setShowPopupClickHandler = () => setShowLabelsPopup(!showLabelsPopup);

  return (
    <div className="note-detail__actions__item">
      <Button
        color="secondary"
        className="note-detail__actions__btn"
        onClick={setShowPopupClickHandler}
      >
        <LabelsIcon className="note-detail__actions__icon" />
        Labels
      </Button>
      {showLabelsPopup ? (
        <LabelsPopup onClose={setShowPopupClickHandler} />
      ) : null}
    </div>
  );
};

export default Labels;

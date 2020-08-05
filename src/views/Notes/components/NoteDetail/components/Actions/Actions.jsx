import React from "react";

import Button from "../../../../../../components/UI/Button/Button";
import "./Actions.scss";

import LabelsIcon from "../../../../../../assets/icons/LabelsIcon";
import ShareIcon from "../../../../../../assets/icons/ShareIcon";
import ArchiveIcon from "../../../../../../assets/icons/ArchiveIcon";
import TrashIcon from "../../../../../../assets/icons/TrashIcon";

const Actions = () => {
  return (
    <div className="note-detail__actions">
      <h3 className="note-detail__actions__title">Actions</h3>
      <div className="note-detail__actions__group">
        <Button
          icon={<LabelsIcon className="note-detail__actions__icon" />}
          color="secondary"
          className="note-detail__actions__btn"
        >
          Labels
        </Button>
        <Button
          icon={<ShareIcon className="note-detail__actions__icon" />}
          color="secondary"
          className="note-detail__actions__btn"
        >
          Share
        </Button>
        <Button
          icon={<ArchiveIcon className="note-detail__actions__icon" />}
          color="secondary"
          className="note-detail__actions__btn"
        >
          Archive
        </Button>
        <Button
          icon={<TrashIcon className="note-detail__actions__icon" />}
          color="secondary"
          className="note-detail__actions__btn"
        >
          Delete
        </Button>
      </div>
    </div>
  );
};

export default Actions;

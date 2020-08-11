import React from "react";

import Button from "../../../../../../components/UI/Button/Button";
import Labels from './components/Labels/Labels';
import "./Actions.scss";

import ShareIcon from "../../../../../../assets/icons/ShareIcon";
import ArchiveIcon from "../../../../../../assets/icons/ArchiveIcon";
import TrashIcon from "../../../../../../assets/icons/TrashIcon";

const Actions = () => {
  return (
    <div className="note-detail__actions">
      <h3 className="note-detail__actions__title">Actions</h3>
      <div className="note-detail__actions__group">
        <Labels />
        <Button color="secondary" className="note-detail__actions__btn">
          <ShareIcon className="note-detail__actions__icon" />
          Share
        </Button>
        <Button color="secondary" className="note-detail__actions__btn">
          <ArchiveIcon className="note-detail__actions__icon" />
          Archive
        </Button>
        <Button color="secondary" className="note-detail__actions__btn">
          <TrashIcon className="note-detail__actions__icon" />
          Delete
        </Button>
      </div>
    </div>
  );
};

export default Actions;

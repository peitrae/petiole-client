import React, { Fragment, useState } from "react";

import Button from "../../components/UI/Button/Button";
import AddIcon from "../../assets/icons/AddIcon";
import Note from "./components/Note/Note";
import NoteDetail from "./components/NoteDetail/NoteDetail";
import "./Notes.scss";

const Notes = () => {
  const [showNoteDetail, setShowNoteDetail] = useState(false);

  const showNoteDetailHandler = () => setShowNoteDetail(!showNoteDetail);

  return (
    <Fragment>
      <div className="notes">
        <div className="notes__header">
          <Button size="large" onClick={showNoteDetailHandler}>
            <AddIcon strokeWidth="1.75px" color="#FAFAFA" />
            <span>Add new note</span>
          </Button>
        </div>
        <div className="notes__group">
          <Note />
        </div>
      </div>
      {showNoteDetail ? <NoteDetail onClose={showNoteDetailHandler} /> : null}
    </Fragment>
  );
};

export default Notes;

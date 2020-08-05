import React from "react";

import Modal from "../../../../components/UI/Modal/Modal";
import Title from "./components/Title/Title";
import CodeEditor from "./components/CodeEditor/CodeEditor";
import Description from "./components/Description/Description";
import Actions from "./components/Actions/Actions";
import CloseButton from "./components/CloseButton/CloseButton";
import "./NoteDetail.scss";

const NoteDetail = ({onClose}) => {
  return (
    <Modal className="note-detail" onBackdropClick={onClose}>
      <CloseButton className="note-detail__close-btn" onClick={onClose}/>
      <div className="note-detail__left">
        <Title />
        <CodeEditor />
        <Description />
      </div>
      <div className="note-detail__right">
        <Actions />
      </div>
    </Modal>
  );
};

export default NoteDetail;

// <TextField className="note-detail__title-input"/>

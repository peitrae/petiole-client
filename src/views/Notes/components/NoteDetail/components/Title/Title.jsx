import React, { useState } from "react";

import TextField from "../../../../../../components/UI/TextField/TextField";
import "./Title.scss";

const Title = () => {
  const [title, setTitle] = useState("");
  const [showForm, setShowForm] = useState(false);

  const showFormClickHandler = () => setShowForm(!showForm);

  const inputChangeHandler = (event) => {
    setTitle(event.target.value);
  };

  if (showForm) {
    return (
      <TextField
        className="note-detail__title-input"
        onChange={inputChangeHandler}
        value={title}
        autoFocus
        onClickOutside={showFormClickHandler}
      />
    );
  } else {
    return (
      <h1 className="note-detail__title" onClick={showFormClickHandler}>
        {title === "" ? (
          <span className="note-detail__title--empty">Title</span>
        ) : (
          title
        )}
      </h1>
    );
  }
};

export default Title;

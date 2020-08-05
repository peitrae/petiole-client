import React, { useState } from "react";

import AddDesc from "./components/AddDesc/AddDesc";
import DescForm from "./components/DescForm/DescForm";
import "./Description.scss";

const Description = () => {
  const [showDescForm, setShowDescForm] = useState(false);
  const [description, setDescription] = useState("");

  const showDescFormHandler = () => setShowDescForm(!showDescForm);

  const inputChangeHandler = (event) => setDescription(event.target.value);

  return (
    <div className="note-detail__desc">
      <h3 className="note-detail__desc__title">Description</h3>
      {showDescForm ? (
        <DescForm
          value={description}
          onChange={inputChangeHandler}
          onClickOutside={showDescFormHandler}
        />
      ) : description === "" ? (
        <AddDesc onClick={showDescFormHandler} />
      ) : (
        <p onClick={showDescFormHandler}>{description}</p>
      )}
    </div>
  );
};

export default Description;

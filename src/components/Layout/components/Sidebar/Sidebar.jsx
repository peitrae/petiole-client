import React, { useState } from "react";

import ListItem from "./components/ListItem/ListItem";
import Button from "../../../UI/Button/Button";
import "./Sidebar.scss";

import GridIcon from "../../../../assets/icons/GridIcon";
import NotesIcon from "../../../../assets/icons/NotesIcon";
import JavascriptIcon from "../../../../assets/icons/JavascriptIcon";
import PythonIcon from "../../../../assets/icons/PythonIcon";
import LabelIcon from "../../../../assets/icons/LabelIcon";
import ArchiveIcon from "../../../../assets/icons/ArchiveIcon";
import TrashIcon from "../../../../assets/icons/TrashIcon";

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(true);

  const setIsExpandedClickHandler = () => setIsExpanded(!isExpanded);

  return (
    <aside className={`sidebar sidebar--${isExpanded ? "expand" : "collapse"}`}>
      <div className="sidebar__header">
        <Button
          size="medium"
          variant="text"
          color="secondary"
          iconOnly
          onClick={setIsExpandedClickHandler}
        >
          <GridIcon color={"#3c40c6"} filled={isExpanded} />
        </Button>
      </div>
      <div className="sidebar__labels">
        <ListItem icon={<NotesIcon />} active>
          Notes
        </ListItem>
        <ListItem icon={<JavascriptIcon />}>JavaScript</ListItem>
        <ListItem icon={<PythonIcon />}>Python</ListItem>
        <ListItem icon={<LabelIcon />}>Label 1</ListItem>
        <ListItem icon={<LabelIcon />}>Label 2</ListItem>
      </div>
      <div className="sidebar__actions">
        <ListItem icon={<ArchiveIcon />}>Archive</ListItem>
        <ListItem icon={<TrashIcon />}>Trash</ListItem>
      </div>
    </aside>
  );
};

export default Sidebar;

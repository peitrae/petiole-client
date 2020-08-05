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
  const [sidebarItems, setSidebarItems] = useState([
    { icon: NotesIcon, title: "Notes", active: true, type: "label" },
    { icon: JavascriptIcon, title: "Javascript", active: false, type: "label" },
    { icon: PythonIcon, title: "Python", active: false, type: "label" },
    { icon: LabelIcon, title: "Label 1", active: false, type: "label" },
    { icon: LabelIcon, title: "Label 2", active: false, type: "label" },
    { icon: ArchiveIcon, title: "Archive", active: false, type: "action" },
    { icon: TrashIcon, title: "Trash", active: false, type: "action" },
  ]);

  const itemClickHandler = (title) => {
    let temp = [...sidebarItems];

    temp = temp.map((item) => {
      if (item.title === title) {
        item.active = true;
      } else {
        item.active = false;
      }

      return item;
    });

    setSidebarItems(temp);
  };

  const menuClickHandler = () => setIsExpanded(!isExpanded);

  return (
    <aside className={`sidebar sidebar--${isExpanded ? "expand" : "collapse"}`}>
      <div className="sidebar__header">
        <Button
          size="medium"
          variant="text"
          color="secondary"
          iconOnly
          onClick={menuClickHandler}
        >
          <GridIcon className="sidebar__header__icon" color={"#3c40c6"} filled={isExpanded} />
        </Button>
      </div>
      <div className="sidebar__labels">
        {sidebarItems
          .filter((item) => item.type === "label")
          .map((label) => (
            <ListItem
              key={label.title}
              icon={label.icon}
              active={label.active}
              onClick={() => itemClickHandler(label.title)}
            >
              {label.title}
            </ListItem>
          ))}
      </div>
      <div className="sidebar__actions">
        {sidebarItems
          .filter((item) => item.type === "action")
          .map((action) => (
            <ListItem
              key={action.title}
              icon={action.icon}
              active={action.active}
              onClick={() => itemClickHandler(action.title)}
            >
              {action.title}
            </ListItem>
          ))}
      </div>
    </aside>
  );
};

export default Sidebar;

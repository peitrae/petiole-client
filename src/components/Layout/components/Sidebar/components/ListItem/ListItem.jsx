import React from "react";

const ListItem = ({ active, children, icon: Icon, onClick }) => {
  const sidebarActive = active ? "sidebar__item--active" : "";

  return (
    <button className={`sidebar__item ${sidebarActive}`} onClick={onClick}>
      <div className="sidebar__item__wrapper">
        <Icon color={active ? "#3c40c6" : "#5F6273"}/>
        <span className="sidebar__item__text">{children}</span>
      </div>
      <div className="sidebar__item__accent"></div>
    </button>
  );
};

export default ListItem;

import React from 'react';

const ListItem = ({ icon, active, children }) => {
  const sidebarActive = active ? 'sidebar__item--active' : null;

  return (
      <button className={`sidebar__item ${sidebarActive}`}>
        <div className="sidebar__item__content">
          {icon}
          <span className="sidebar__item__text">{children}</span>
        </div>
        <div className="sidebar__item__accent"></div>
      </button>
  );
};

export default ListItem;

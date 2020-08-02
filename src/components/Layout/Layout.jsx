import React from 'react';

import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import './Layout.scss';

const Layout = (props) => {
  return (
    <div className="layout">
      <Navbar />
      <div className="layout--inline">
        <Sidebar />
        {props.children}
      </div>
    </div>
  );
};

export default Layout;

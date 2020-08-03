import React from 'react';

import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import './Layout.scss';

const Layout = (props) => {
  return (
    <div className="layout">
      <Sidebar />
      <div className="layout--col">
        <Header />
        {props.children}
      </div>
    </div>
  );
};

export default Layout;

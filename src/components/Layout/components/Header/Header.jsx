import React from 'react';

import SearchBar from './components/SearchBar/SearchBar';
import Profile from './components/Profile/Profile';
import './Header.scss';

const Header = () => {
  return (
    <header className="header">
      <SearchBar />
      <Profile />
    </header>
  )
}

export default Header;
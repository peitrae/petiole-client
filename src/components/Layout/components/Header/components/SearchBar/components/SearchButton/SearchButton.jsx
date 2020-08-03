import React from 'react';

import SearchIcon from '../../../../../../../../assets/icons/SearchIcon';
import './SearchButton.scss';

const SearchButton = ({ onClick }) => (
  <button className="search-button" onClick={onClick}>
    <SearchIcon />
    <span className="search-button__text">Search</span>
  </button>
);

export default SearchButton;

import React, { useState } from 'react';

import SearchButton from './components/SearchButton/SearchButton';
import SearchInput from './components/SearchInput/SearchInput';

const SearchBar = () => {
  const [showForm, setShowForm] = useState(false);

  const showFormHandler = () => setShowForm(!showForm);

  if (showForm) {
    return <SearchInput onClickOutside={showFormHandler} />;
  } else {
    return <SearchButton onClick={showFormHandler} />;
  }
};

export default SearchBar;

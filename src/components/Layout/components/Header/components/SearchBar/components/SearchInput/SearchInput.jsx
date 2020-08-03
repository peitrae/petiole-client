import React, { useRef } from 'react';

import TextField from '../../../../../../../UI/TextField/TextField';
import SearchIcon from '../../../../../../../../assets/icons/SearchIcon';
import useClickOutside from '../../../../../../../../hooks/useClickOutside';

const SearchInput = ({ onClickOutside }) => {
  const searchInputRef = useRef();

  useClickOutside(searchInputRef, onClickOutside);

  return (
    <div ref={searchInputRef}>
      <TextField icon={<SearchIcon />} placeholder="Search" />
    </div>
  );
};

export default SearchInput;

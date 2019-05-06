/* eslint-disable react/button-has-type */
import React from 'react';
import PropTypes from 'prop-types';

const SearchBar = props => {
  SearchBar.propTypes = {
    allZipCodes: PropTypes.arrayOf(PropTypes.object).isRequired
  };

  const handleSearch = event => {
    console.log(props.allZipCodes);
    event.preventDefault();
  };

  const handleLiveSearch = event => {
    console.log('live searching...');
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSearch} autoComplete="off">
      <input
        placeholder="Wpisz adres..."
        onKeyUp={handleLiveSearch}
        type="text"
        name="search"
      />
      <button type="Submit">Szukaj</button>
    </form>
  );
};

export default SearchBar;

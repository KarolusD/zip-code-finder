import React from 'react';
import SearchBar from '../SearchBar';
import Table from '../Table';
import './Layout.scss';

const Layout = () => {
  return (
    <div className="section">
      <div className="container">
        <SearchBar />
        <Table />
      </div>
    </div>
  );
};

export default Layout;

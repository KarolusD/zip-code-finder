import React from 'react';
import './Table.scss';
import Thead from './Thead';
import Tbody from './Tbody';
import { AppConsumer } from '../AppProvider';

const Table = () => {
  return (
    // eslint-disable-next-line react/jsx-one-expression-per-line
    <AppConsumer>
      {context => (
        <table
          className="table is-hoverable is-fullwidth is-responsive"
          style={{
            display: context.searchedData.length === 0 ? 'none' : 'table'
          }}
        >
          <Thead />
          <Tbody searchedData={context.searchedData} />
        </table>
      )}
    </AppConsumer>
  );
};

export default Table;

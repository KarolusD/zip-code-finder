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
        <table className="table is-hoverable is-fullwidth">
          <Thead />
          <Tbody searchedData={context.searchedData} />
        </table>
      )}
    </AppConsumer>
  );
};

export default Table;

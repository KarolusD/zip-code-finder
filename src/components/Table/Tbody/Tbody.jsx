import React from 'react';
import PropTypes from 'prop-types';
import Td from '../Td';

const Tbody = props => {
  const { searchedData } = props;
  const tableInfo = searchedData.map(addressToShow => {
    return (
      <tr key={addressToShow['KOD POCZTOWY'] + Math.random()}>
        <Td name={addressToShow.ADRES} />
        <Td name={addressToShow['KOD POCZTOWY']} />
        <Td name={addressToShow['MIEJSCOWOŚĆ']} />
        <Td name={addressToShow.POWIAT} />
        <Td name={addressToShow['WOJEWÓDZTWO']} />
      </tr>
    );
  });
  return <tbody>{tableInfo}</tbody>;
};

Tbody.propTypes = {
  searchedData: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Tbody;

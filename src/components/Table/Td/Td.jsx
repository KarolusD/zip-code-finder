import React from 'react';
import PropTypes from 'prop-types';

const Td = ({ name }) => {
  Td.propTypes = {
    name: PropTypes.string.isRequired
  };
  return <td>{name}</td>;
};

export default Td;

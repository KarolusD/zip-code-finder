/* eslint-disable react/button-has-type */
import React from 'react';
import PropTypes from 'prop-types';
import { pure } from 'recompose';

const Button = ({ type, name }) => {
  return <button type={type}>{name}</button>;
};

Button.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string.isRequired
};

Button.defaultProps = {
  type: 'button'
};

export default pure(Button);

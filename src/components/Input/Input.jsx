import React from 'react';
import PropTypes from 'prop-types';
import { pure } from 'recompose';

const Input = props => {
  const { placeholder, type, value, onChangeValue } = props;

  return (
    <input
      placeholder={placeholder}
      type={type}
      onChange={onChangeValue}
      value={value}
    />
  );
};

Input.propTypes = {
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChangeValue: PropTypes.func.isRequired
};

Input.defaultProps = {
  value: ''
};

export default pure(Input);

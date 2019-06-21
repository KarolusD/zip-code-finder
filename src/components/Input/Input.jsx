import React from 'react';
import PropTypes from 'prop-types';
import { pure } from 'recompose';
import './Input.scss';

const Input = props => {
  const { placeholder, type, value, onChangeValue } = props;

  return (
    <div className="field">
      <div className="control">
        <input
          className="input is-primary"
          placeholder={placeholder}
          type={type}
          onChange={onChangeValue}
          value={value}
        />
      </div>
    </div>
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

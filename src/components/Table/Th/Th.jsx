import React from 'react';
import PropTypes from 'prop-types';

const Th = ({ head }) => {
  Th.propTypes = {
    head: PropTypes.string.isRequired
  };

  return (
    <th>
      <abbr title={head}>{head}</abbr>
    </th>
  );
};

export default Th;

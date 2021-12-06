import React from 'react';
import PropTypes from 'prop-types';

function Button({ dataTestId, name, value }) {
  return (
    <input
      dataTestId={ dataTestId }
      type="submit"
      name={ name }
      value={ value }
    />
  );
}

Button.propTypes = {
  dataTestId: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default Button;

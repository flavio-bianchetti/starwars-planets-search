import React from 'react';
import PropTypes from 'prop-types';

function Button({ dataTestId, name, value }) {
  return (
    <button
      data-testid={ dataTestId }
      type="submit"
      name={ name }
    >
      { value }
    </button>
  );
}

Button.propTypes = {
  dataTestId: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default Button;

import React from 'react';
import PropTypes from 'prop-types';

function RadioButton({ dataTestId, name, value, description }) {
  return (
    <label
      htmlFor={ value }
    >
      <input
        data-testid={ dataTestId }
        type="radio"
        id={ value }
        name={ name }
        value={ value }
      />
      { description }
    </label>
  );
}

RadioButton.propTypes = {
  dataTestId: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default RadioButton;

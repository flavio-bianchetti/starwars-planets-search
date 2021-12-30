import React from 'react';
import PropTypes from 'prop-types';

function RadioButton({ dataTestId, name, value, description, onChange }) {
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
        onChange={ onChange }
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
  onChange: PropTypes.func.isRequired,
};

export default RadioButton;

import React from 'react';
import PropTypes from 'prop-types';

function Input({ dataTestId, type, name, value, onChange }) {
  return (
    <input
      data-testid={ dataTestId }
      type={ type }
      name={ name }
      value={ value }
      onChange={ onChange }
    />
  );
}

Input.propTypes = {
  dataTestId: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Input;

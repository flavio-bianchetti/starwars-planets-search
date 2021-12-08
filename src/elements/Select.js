import React from 'react';
import PropTypes from 'prop-types';

function Select({ dataTestId, name, arrayOptions, title, onChange }) {
  return (
    <div>
      <label
        htmlFor={ name }
      >
        { title }
        <select
          data-testid={ dataTestId }
          id={ name }
          name={ name }
          onChange={ onChange }
        >
          {
            arrayOptions.map((option, index) => (
              <option
                key={ index }
                value={ option.value }
              >
                { option.description }
              </option>
            ))
          }
        </select>
      </label>
    </div>
  );
}

Select.propTypes = {
  dataTestId: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  arrayOptions: PropTypes.arrayOf(PropTypes.string).isRequired,
  title: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Select;

import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Filter() {
  const { filter, removeFilter } = useContext(StarWarsContext);
  const { filterByNumericValues } = filter;
  return (
    <div>
      {
        filterByNumericValues.map((numericValues, index) => (
          <div
            key={ index }
            data-testid="filter"
          >
            { numericValues.column }
            { numericValues.comparison }
            { numericValues.value }
            <button
              type="button"
              name={ index }
              onClick={ (event) => removeFilter(event) }
            >
              X
            </button>
          </div>
        ))
      }
    </div>
  );
}

export default Filter;

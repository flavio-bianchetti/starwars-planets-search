import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from '../context/StarWarsContext';
import getStarWarsAPI from '../services/getStarWarsAPI';

function StarWarsContextProvider({ children }) {
  const [data, setdata] = useState([{
    name: '',
    rotation_period: '',
    orbital_period: '',
    diameter: '',
    climate: '',
    gravity: '',
    terrain: '',
    surface_water: '',
    population: '',
    films: '',
    created: '',
    edited: '',
    url: '',
  }]);
  const [filter, setFilter] = useState(
    {
      filterByName: {
        name: '',
      },
      filterByNumericValues: [
        {
          column: '',
          comparison: '',
          value: '',
        },
      ],
    },
  );
  const [tempFilterByNumericValues, setTempFilterByNumericValues] = useState(
    {
      column: 'population',
      comparison: 'maior que',
      value: '0',
    },
  );
  const [shouldRefreshStarWarsAPI, setShouldRefreshStarWarsAPI] = useState(true);

  function handleFetchSuccess(json) {
    const { results } = json;
    if (filter.filterByName.name !== '') {
      setdata(results.filter((result) => result.name.includes(filter.filterByName.name)));
    } else {
      setdata(results);
    }
  }

  function handleFetchError(error) {
    console.log('Error:', error.message);
  }

  function fetchStarWarsAPI() {
    if (!shouldRefreshStarWarsAPI) return;

    setShouldRefreshStarWarsAPI(false);

    getStarWarsAPI()
      .then(handleFetchSuccess, handleFetchError);
  }

  function handleChangeFilterByName(event) {
    event.preventDefault();
    setFilter({
      ...filter,
      filterByName: {
        name: event.target.value,
      },
    });
  }

  function handleClickFilterByNumericValues(event) {
    event.preventDefault();
    setFilter({
      ...filter,
      filterByNumericValues: [
        {
          column: tempFilterByNumericValues.column,
          comparison: tempFilterByNumericValues.comparison,
          value: tempFilterByNumericValues.value,
        },
      ],
    });
  }

  function handleChangeFilterByNumericValues(event) {
    event.preventDefault();
    const { name, value } = event.target;
    setTempFilterByNumericValues({
      ...tempFilterByNumericValues,
      [name]: value,
    });
  }

  useEffect(() => {
    fetchStarWarsAPI();
  }, [data, filter]);

  const context = {
    data,
    filter,
    tempFilterByNumericValues,
    handleChangeFilterByNumericValues,
    handleChangeFilterByName,
    handleClickFilterByNumericValues,
  };

  return (
    <StarWarsContext.Provider value={ context }>
      { children }
    </StarWarsContext.Provider>
  );
}

StarWarsContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StarWarsContextProvider;

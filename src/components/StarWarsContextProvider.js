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
      filterByNumericValues: [],
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
  const [optionsSelectFilter, setOptionsSelectFilter] = useState(
    [
      { value: 'population', description: 'population' },
      { value: 'orbital_period', description: 'orbital_period' },
      { value: 'diameter', description: 'diameter' },
      { value: 'rotation_period', description: 'rotation_period' },
      { value: 'surface_water', description: 'surface_water' },
    ],
  );

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
    setFilter((previousFilter) => ({
      ...filter,
      filterByNumericValues: [
        ...previousFilter.filterByNumericValues,
        {
          column: tempFilterByNumericValues.column,
          comparison: tempFilterByNumericValues.comparison,
          value: tempFilterByNumericValues.value,
        },
      ],
    }));
    const updateSelectFilter = optionsSelectFilter
      .filter((option) => option.value !== tempFilterByNumericValues.column);
    setOptionsSelectFilter(updateSelectFilter);
    let column = '';
    if (updateSelectFilter.length > 0) {
      column = updateSelectFilter[0].value;
    }
    setTempFilterByNumericValues((previousFilter) => ({
      ...previousFilter,
      column,
    }));
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
  }, [data, fetchStarWarsAPI, filter]);

  const context = {
    data,
    filter,
    tempFilterByNumericValues,
    handleChangeFilterByNumericValues,
    handleChangeFilterByName,
    handleClickFilterByNumericValues,
    optionsSelectFilter,
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

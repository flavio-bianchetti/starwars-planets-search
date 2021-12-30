import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from '../context/StarWarsContext';
import getStarWarsAPI from '../services/getStarWarsAPI';

function StarWarsContextProvider({ children }) {
  const [data, setData] = useState([{
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
  const [orderTable, setOrderTable] = useState(
    {
      order: {
        column: 'population',
        sort: 'ASC',
      },
    },
  );

  function handleFetchSuccess(json) {
    const { results } = json;
    // Solução baseada nos exemplos do site:
    // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
    const minusOne = -1;
    const NewResults = results.sort((a, b) => (a.name > b.name ? 1 : minusOne));
    console.log(results);
    if (filter.filterByName.name !== '') {
      setData(
        NewResults.filter((result) => result.name.includes(filter.filterByName.name)),
      );
    } else {
      setData(NewResults);
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

  function removeFilter(event) {
    const { name } = event.target;
    setFilter((previousFilter) => ({
      ...previousFilter,
      filterByNumericValues: previousFilter
        .filterByNumericValues
        .filter((_numericValue, index) => index !== Number(name)),
    }));
  }

  function handleChangeOrderTable(event) {
    const { name, value } = event.target;
    setOrderTable((previousOrderTable) => ({
      order: {
        ...previousOrderTable.order,
        [name]: value,
      },
    }));
  }

  // Solução baseada nos exemplos do site:
  // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
  function clickChangeOrderTable(event) {
    event.preventDefault();
    const { order } = orderTable;
    const oldData = data.filter((item) => item);
    setData(null);
    setData(() => oldData.sort((a, b) => {
      if (order.sort === 'ASC') {
        return Number(a[order.column]) - Number(b[order.column]);
      }
      if (order.sort === 'DESC') {
        return Number(b[order.column]) - Number(a[order.column]);
      }
      return 0;
    }));
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
    removeFilter,
    handleChangeOrderTable,
    clickChangeOrderTable,
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

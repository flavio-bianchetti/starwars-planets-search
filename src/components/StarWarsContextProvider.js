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
    // setShouldRefreshStarWarsAPI(true);
    setFilter({
      ...filter,
      filterByName: {
        name: event.target.value,
      },
    });
  }

  useEffect(() => {
    fetchStarWarsAPI();
  }, [data, filter]);

  const context = {
    data,
    filter,
    handleChangeFilterByName,
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

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

  function handleFetchSuccess(json) {
    setdata(json.results);
  }

  function handleFetchError(error) {
    console.log('Error:', error.message);
  }

  function fetchStarWarsAPI() {
    getStarWarsAPI()
      .then(handleFetchSuccess, handleFetchError);
  }

  useEffect(() => {
    fetchStarWarsAPI();
  }, []);

  const context = {
    data,
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

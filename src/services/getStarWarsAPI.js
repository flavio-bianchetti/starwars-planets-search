const starWarsAPI = 'https://swapi-trybe.herokuapp.com/api/planets/';

function getStarWarsAPI() {
  return fetch(starWarsAPI)
    .then((response) => (
      response
        .json()
        .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json)))));
}

export default getStarWarsAPI;

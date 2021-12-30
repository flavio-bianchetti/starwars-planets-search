import React from 'react';
import PropTypes from 'prop-types';

function getArrayFilteredByName(data, name) {
  return data.filter((planet) => planet.name.includes(name));
}

// filtro elaborado após dica fornecida por Bruno Bartolomeu, Isaac Batista e Lucas Pinheiro.
function getArrayFilteredByNumericValuesFilter(data, filterByNumericValues) {
  return data.filter((planet) => filterByNumericValues.every((values) => {
    const { column, comparison, value } = values;
    const valuePlanet = Number(planet[column]);
    if (comparison === 'maior que') {
      return valuePlanet > Number(value);
    }
    if (comparison === 'menor que') {
      return valuePlanet < Number(value);
    }
    if (comparison === 'igual a') {
      console.log(valuePlanet, value);
      return valuePlanet === Number(value);
    }
    return false;
  }));
}

function Table({ dataTestId, data, filter }) {
  let rowFilter = data;
  const { filterByName, filterByNumericValues } = filter;

  if (filterByName.name.length > 0) {
    rowFilter = getArrayFilteredByName(rowFilter, filterByName.name);
  }

  if (filterByNumericValues.length > 0) {
    rowFilter = getArrayFilteredByNumericValuesFilter(
      rowFilter, filterByNumericValues,
    );
  }
  return (
    <table>
      <tr>
        <th>Name</th>
        <th>Rotation Period</th>
        <th>Orbital Period</th>
        <th>Diameter</th>
        <th>Climate</th>
        <th>Gravity</th>
        <th>Terrain</th>
        <th>Surface Water</th>
        <th>Population</th>
        <th>Films</th>
        <th>Created</th>
        <th>Edited</th>
        <th>URL</th>
      </tr>
      {
        rowFilter.map((line, indexLine) => (
          <tr
            key={ indexLine }
            dataTestId={ dataTestId }
          >
            <td
              data-testid="planet-name"
            >
              { line.name }
            </td>
            <td>{ line.rotation_period }</td>
            <td>{ line.orbital_period }</td>
            <td>{ line.diameter }</td>
            <td>{ line.climate }</td>
            <td>{ line.gravity }</td>
            <td>{ line.terrain }</td>
            <td>{ line.surface_water }</td>
            <td>{ line.population }</td>
            <td>{ line.films }</td>
            <td>{ line.created }</td>
            <td>{ line.edited }</td>
            <td>{ line.url }</td>
          </tr>
        ))
      }
    </table>
  );
}

Table.propTypes = {
  dataTestId: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(PropTypes.string).isRequired,
  filter: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Table;

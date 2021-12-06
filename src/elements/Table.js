import React from 'react';
import PropTypes from 'prop-types';

function Table({ dataTestId, arrayLines }) {
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
        arrayLines.map((line, index) => (
          <tr
            key={ index }
            dataTestId={ dataTestId }
          >
            <td>{ line.name }</td>
            <td>{ line.rotation }</td>
            <td>{ line.orbital }</td>
            <td>{ line.diameter }</td>
            <td>{ line.climate }</td>
            <td>{ line.gravity }</td>
            <td>{ line.terrain }</td>
            <td>{ line.water }</td>
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
  arrayLines: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Table;

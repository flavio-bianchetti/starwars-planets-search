import React, { useContext } from 'react';
import Table from '../elements/Table';
import StarWarsContext from '../context/StarWarsContext';

function ArticleTable() {
  const { data, filter } = useContext(StarWarsContext);
  return (
    <Table
      dataTestId="tablePlanets"
      data={ data }
      filter={ filter }
    />
  );
}

export default ArticleTable;

import React from 'react';
import Table from '../elements/Table';

function ArticleTable() {
  return (
    <Table
      dataTestId="tablePlanets"
      arrayLines={ [{ name: 'teste1',
        rotation: '1',
        orbital: '1',
        diameter: '1',
        climate: '1',
        gravity: '1',
        terrain: '1',
        surface: '1',
        water: '1',
        population: '1',
        films: '1',
        created: '1',
        edited: '1',
        url: '1',
      },
      { name: 'teste2',
        rotation: '2',
        orbital: '2',
        diameter: '2',
        climate: '2',
        gravity: '2',
        terrain: '2',
        surface: '2',
        water: '2',
        population: '2',
        films: '2',
        created: '2',
        edited: '2',
        url: '2',
      },
      ] }
    />
  );
}

export default ArticleTable;

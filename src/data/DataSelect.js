const DataSelect = [
  {
    dataTestId: 'column-filter',
    name: 'column',
    arrayOptions: [
      { value: 'population', description: 'population' },
      { value: 'orbital_period', description: 'orbital_period' },
      { value: 'diameter', description: 'diameter' },
      { value: 'rotation_period', description: 'rotation_period' },
      { value: 'surface_water', description: 'surface_water' },
    ],
    title: 'Coluna',
  },
  {
    dataTestId: 'comparison-filter',
    name: 'comparison',
    arrayOptions: [
      { value: 'maior que', description: 'maior que' },
      { value: 'menor que', description: 'menor que' },
      { value: 'igual a', description: 'igual a' },
    ],
    title: 'Operador',
  },
  {
    dataTestId: 'column-sort',
    name: 'column',
    arrayOptions: [
      { value: 'population', description: 'population' },
      { value: 'orbital_period', description: 'orbital_period' },
      { value: 'diameter', description: 'diameter' },
      { value: 'rotation_period', description: 'rotation_period' },
      { value: 'surface_water', description: 'surface_water' },
    ],
    title: 'Ordenar',
  },
];

export default DataSelect;

import React, { useContext } from 'react';
import Input from '../elements/Input';
import Select from '../elements/Select';
import Button from '../elements/Button';
import RadioButton from '../elements/RadioButton';
import DataSelect from '../data/DataSelect';
import StarWarsContext from '../context/StarWarsContext';

function searchInput(filter, handleChangeFilterByName) {
  const { filterByName } = filter;
  return (
    <Input
      dataTestId="name-filter"
      type="text"
      name="inputSearches"
      value={ filterByName.name }
      onChange={ handleChangeFilterByName }
    />
  );
}

function filterForm(tempFilterByNumericValues,
  handleClickFilterByNumericValues,
  handleChangeFilterByNumericValues,
  optionsSelectFilter) {
  return (
    <form onSubmit={ handleClickFilterByNumericValues }>
      {
        DataSelect.map((select, index) => (
          index < 2 && (
            <Select
              key={ index }
              dataTestId={ select.dataTestId }
              name={ select.name }
              arrayOptions={ index === 0
                ? optionsSelectFilter
                : select.arrayOptions }
              title={ select.title }
              onChange={ handleChangeFilterByNumericValues }
            />
          )
        ))
      }
      <Input
        dataTestId="value-filter"
        type="number"
        name="value"
        value={ tempFilterByNumericValues.value || 0 }
        onChange={ handleChangeFilterByNumericValues }
      />
      <Button
        dataTestId="button-filter"
        name="buttonFilter"
        value="FILTRAR"
      />
    </form>
  );
}

function orderForm(handleChangeOrderTable, clickChangeOrderTable) {
  return (
    <form onSubmit={ clickChangeOrderTable }>
      <Select
        dataTestId={ DataSelect[2].dataTestId }
        name={ DataSelect[2].name }
        arrayOptions={ DataSelect[2].arrayOptions }
        title={ DataSelect[2].title }
        onChange={ handleChangeOrderTable }
      />
      <RadioButton
        dataTestId="column-sort-input-asc"
        name="sort"
        value="ASC"
        description="Ascendente"
        onChange={ handleChangeOrderTable }
      />
      <RadioButton
        dataTestId="column-sort-input-desc"
        name="sort"
        value="DESC"
        description="Descendente"
        onChange={ handleChangeOrderTable }
      />
      <Button
        dataTestId="column-sort-button"
        name="ordenar"
        value="ORDENAR"
      />
    </form>
  );
}

function Header() {
  const {
    filter,
    tempFilterByNumericValues,
    handleChangeFilterByNumericValues,
    handleChangeFilterByName,
    handleClickFilterByNumericValues,
    optionsSelectFilter,
    handleChangeOrderTable,
    clickChangeOrderTable,
  } = useContext(StarWarsContext);
  return (
    <section>
      <h1>Projeto Star Wars - Trybe</h1>
      { searchInput(filter, handleChangeFilterByName) }
      { filterForm(tempFilterByNumericValues,
        handleClickFilterByNumericValues,
        handleChangeFilterByNumericValues,
        optionsSelectFilter) }
      { orderForm(handleChangeOrderTable, clickChangeOrderTable) }
    </section>
  );
}

export default Header;

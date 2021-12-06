import React from 'react';
import Input from '../elements/Input';
import Select from '../elements/Select';
import Button from '../elements/Button';
import RadioButton from '../elements/RadioButton';
import DataSelect from '../data/DataSelect';

function searchInput() {
  return (
    <Input
      dataTestId="input"
      type="text"
      name="inputSearches"
      value=""
      onChange={ () => true }
    />
  );
}

function filterForm() {
  return (
    <form>
      {
        DataSelect.map((select, index) => (
          index < 2 && (
            <Select
              key={ index }
              dataTestId={ select.dataTestId }
              name={ select.name }
              arrayOptions={ select.arrayOptions }
              title={ select.title }
            />
          )
        ))
      }
      <Input
        dataTestId="input"
        type="number"
        name="inputSearches"
        value="0"
        onChange={ () => true }
      />
      <Button
        dataTestId="button"
        name="filtrar"
        value="FILTRAR"
      />
    </form>
  );
}

function orderForm() {
  return (
    <form>
      <Select
        dataTestId={ DataSelect[2].dataTestId }
        name={ DataSelect[2].name }
        arrayOptions={ DataSelect[2].arrayOptions }
        title={ DataSelect[2].title }
      />
      <RadioButton
        dataTestId="radio"
        name="classificacao"
        value="ascendente"
        description="Ascendente"
      />
      <RadioButton
        dataTestId="radio"
        name="classificacao"
        value="descendente"
        description="Descendente"
      />
      <Button
        dataTestId="button"
        name="ordenar"
        value="ORDENAR"
      />
    </form>
  );
}

function Header() {
  return (
    <section>
      <h1>Projeto Star Wars - Trybe</h1>
      { searchInput() }
      { filterForm() }
      { orderForm() }
    </section>
  );
}

export default Header;

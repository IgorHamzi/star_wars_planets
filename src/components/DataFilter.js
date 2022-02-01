import React, { useContext } from 'react';
import Context from '../context/Context';

const DataFilter = () => {
  const { useInputFilterName } = useContext(Context);
  const {
    handleChange,
    setFilterByNumber,
    filter,
    filterByNumber,
    opts,
  } = useContext(Context);

  return (
    <div>
      <input
        onChange={ useInputFilterName }
        type="text"
        data-testid="name-filter"
        name="filterByName"
      />
      <select
        name="column"
        data-testid="column-filter"
        value={ filter.column }
        onChange={ handleChange }
      >
        {opts.map((opt) => <option key={ opt }>{opt}</option>)}
      </select>

      <select
        name="comparison"
        data-testid="comparison-filter"
        value={ filter.comparison }
        onChange={ handleChange }
      >
        <option>maior que</option>
        <option>menor que</option>
        <option>igual a</option>
      </select>

      <input
        name="value"
        type="number"
        data-testid="value-filter"
        value={ filter.value }
        onChange={ handleChange }
      />

      <button
        type="button"
        data-testid="button-filter"
        onClick={ () => {
          setFilterByNumber({
            filterByNumericValues: [...filterByNumber.filterByNumericValues, filter],
          });
        } }
      >
        Filtrar
      </button>
    </div>
  );
};

export default DataFilter;

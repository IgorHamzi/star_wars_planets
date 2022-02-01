import React, { useContext } from 'react';
import Context from '../context/Context';

const DataFilter = () => {
  const { useInputFilterName } = useContext(Context);

  return (
    <div>
      <input
        onChange={ useInputFilterName }
        type="text"
        data-testid="name-filter"
        name="filterByName"
      />
    </div>
  );
};

export default DataFilter;

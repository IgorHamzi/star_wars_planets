import React, { useContext } from 'react';
import Context from '../context/Context';

import Table from './Table';
import TableNumberFilter from './TableFilterNumber';

const TableDecider = () => {
  const { filterByNumber } = useContext(Context);
  return (
    <div>
      {filterByNumber.filterByNumericValues.length === 0 ? <Table />
        : <TableNumberFilter />}
    </div>
  );
};

export default TableDecider;

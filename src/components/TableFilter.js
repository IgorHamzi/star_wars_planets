import React, { useContext } from 'react';
import Context from '../context/Context';
import Table from './Table';
import TableFilterNumber from './TableFilterNumber';

const TableFilter = () => {
  const { filterByNumber } = useContext(Context);
  return (
    <div>
      {filterByNumber.filterByNumericValues.length === 0 ? <Table />
        : <TableFilterNumber />}
    </div>
  );
};

export default TableFilter;

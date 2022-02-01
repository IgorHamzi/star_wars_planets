import React from 'react';
import './App.css';
import Provider from './context/Provider';
import DataFilter from './components/DataFilter';
import TableFilter from './components/TableFilter';

function App() {
  return (
    <Provider>
      <DataFilter />
      <TableFilter />
    </Provider>
  );
}

export default App;

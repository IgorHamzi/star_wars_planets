import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';
import PlanetsAPI from '../data/PlanetsAPI';

const InfosProvider = ({ children }) => {
  const [data, insertData] = useState([]);
  const [filterByName, useNameFilter] = useState({
    name: '',
  });

  const [filter, filterValues] = useState({
    column: 'population',
    comparison: 'maior que',
    value: 0,
  });

  const [opts, setOpts] = useState([
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ]);

  const [filterByNumber, setFilterByNumber] = useState({
    filterByNumericValues: [],
  });

  const useInputFilterName = (event) => {
    useNameFilter({ name: event.target.value });
  };

  const handleChange = (event) => { // a funcao handlechange
    filterValues({ // vai setar o filter
      ...filter, // como o valor que já era
      [e.target.name]: event.target.value, // e alterar o que estamos lidando seja column, comparion ou value (tem de colocar a tag name no elemento do forms)
    });
  };

  useEffect(() => {
    PlanetsAPI()
      .then((datas) => {
        insertData(datas.results);
      });
  }, []);

  const valueValue = {
    data,
    filterByName,
    filterByNumber,
    filter,
    opts,
    useInputFilterName,
    handleChange,
    setFilterByNumber,
    setOpts,
  };

  return (
    <Context.Provider value={ valueValue }>
      {children}
    </Context.Provider>
  );
};

InfosProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default InfosProvider;

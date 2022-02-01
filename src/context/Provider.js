import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';
import PlanetsAPI from '../data/PlanetsAPI';

const InfosProvider = ({ children }) => {
  const [data, insertData] = useState([]);
  const [filterByName, useNameFilter] = useState({
    name: '',
  });

  const useInputFilterName = (event) => {
    useNameFilter({ name: event.target.value });
  };

  useEffect(() => {
    PlanetsAPI()
      .then((datas) => {
        insertData(datas.results);
      });
  }, []);

  return (
    <Context.Provider value={ { data, filterByName, useInputFilterName } }>
      {children}
    </Context.Provider>
  );
};

InfosProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default InfosProvider;

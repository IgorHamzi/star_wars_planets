import React, { useEffect, useState } from 'react';
import { PropTypes } from 'prop-types';
import PlanetsAPI from '../data/PlanetsAPI';
import Context from './Context';

function Provider(props) {
  const [data, setData] = useState([]);
  useEffect(() => {
    PlanetsAPI().then((planets) => setData(planets));
  }, []);
  const { children } = props;
  return (
    <Context.Provider value={ { data } }>
      {children}
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Provider;

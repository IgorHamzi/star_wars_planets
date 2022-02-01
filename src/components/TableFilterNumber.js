import React, { useContext, useEffect } from 'react';
import Context from '../context/Context';

const TableFilterNumber = () => {
  const { data, filterByNumber, opts, setOpts } = useContext(Context);
  const colmunStr = filterByNumber.filterByNumericValues[0].column;
  const valueStr = filterByNumber.filterByNumericValues[0].value;

  useEffect(() => {
    for (let i = 0; i < opts.length; i += 1) {
      if (opts[i] === colmunStr) {
        opts.splice(i, 1);
      }
    }
    setOpts([opts[0], opts[1], opts[2], opts[3]]);
  }, []);

  const getTable = () => {
    if (filterByNumber.filterByNumericValues[0].comparison === 'maior que') {
      return (
        data.filter((planet) => Number(planet[colmunStr]) > Number(valueStr))
          .map((planet) => (
            <tr key={ planet.url }>
              <td>{planet.name}</td>
              <td>{planet.rotation_period}</td>
              <td>{planet.orbital_period}</td>
              <td>{planet.diameter}</td>
              <td>{planet.climate}</td>
              <td>{planet.gravity}</td>
              <td>{planet.terrain}</td>
              <td>{planet.surface_water}</td>
              <td>{planet.population}</td>
              <td>{planet.films}</td>
              <td>{planet.created}</td>
              <td>{planet.edited}</td>
              <td>{planet.url}</td>
            </tr>))
      );
    }
    if (filterByNumber.filterByNumericValues[0].comparison === 'menor que') {
      return (
        data.filter((planet) => Number(planet[colmunStr]) < Number(valueStr))
          .map((planet) => (
            <tr key={ planet.edited }>
              <td>{planet.name}</td>
              <td>{planet.rotation_period}</td>
              <td>{planet.orbital_period}</td>
              <td>{planet.diameter}</td>
              <td>{planet.climate}</td>
              <td>{planet.gravity}</td>
              <td>{planet.terrain}</td>
              <td>{planet.surface_water}</td>
              <td>{planet.population}</td>
              <td>{planet.films}</td>
              <td>{planet.created}</td>
              <td>{planet.edited}</td>
              <td>{planet.url}</td>
            </tr>))
      );
    }
    if (filterByNumber.filterByNumericValues[0].comparison === 'igual a') {
      return (
        data.filter((planet) => Number(planet[colmunStr]) === Number(valueStr))
          .map((planet) => (
            <tr key={ planet.name }>
              <td>{planet.name}</td>
              <td>{planet.rotation_period}</td>
              <td>{planet.orbital_period}</td>
              <td>{planet.diameter}</td>
              <td>{planet.climate}</td>
              <td>{planet.gravity}</td>
              <td>{planet.terrain}</td>
              <td>{planet.surface_water}</td>
              <td>{planet.population}</td>
              <td>{planet.films}</td>
              <td>{planet.created}</td>
              <td>{planet.edited}</td>
              <td>{planet.url}</td>
            </tr>))
      );
    }
  };

  return (
    <>
      <div>
        <p>{colmunStr}</p>
        <p>{filterByNumber.filterByNumericValues[0].comparison}</p>
        <p>{valueStr}</p>
      </div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Rotation Period</th>
            <th>Orbital Period</th>
            <th>Diameter</th>
            <th>Climate</th>
            <th>Gravity</th>
            <th>Terrain</th>
            <th>Surface Water</th>
            <th>Population</th>
            <th>Films</th>
            <th>Created</th>
            <th>Edited</th>
            <th>URL</th>
          </tr>
        </thead>
        <tbody>
          {getTable()}
        </tbody>
      </table>
    </>
  );
};

export default TableFilterNumber;

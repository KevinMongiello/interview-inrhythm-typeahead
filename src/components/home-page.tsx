import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";

import { getCountries, IStoreState } from '../redux';

export interface IHomePage { }

export const HomePage: React.FC<IHomePage> = (props) => {
  const countries = useSelector((state: IStoreState) => state.sampleReducer.countries);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      await dispatch(getCountries());
    })()
  }, [])

  return (
    <div>
      <h1>Home</h1>
      <pre>{JSON.stringify(countries, null, '  ')}</pre>
    </div>
  );
}

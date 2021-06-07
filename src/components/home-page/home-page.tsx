import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";

import { Typeahead } from '../typeahead/typeahead';
import { getCountries, IStoreState } from '../../redux';

export interface IHomePage { }

export const HomePage: React.FC<IHomePage> = (props) => {
  // const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const countries = useSelector((state: IStoreState) => state.sampleReducer.countries);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      await dispatch(getCountries());
      // setIsLoaded(true);
    })()
  }, []);

  // if (!isLoaded) {
  //   return null;
  // }

  return (
    <div>
      <h1>Home</h1>
      <Typeahead options={countries} />
    </div>
  );
}

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";

import { Typeahead } from '../typeahead/typeahead';
import { getCountries, IStoreState } from '../../redux';

export interface IHomePage { }

export const HomePage: React.FC<IHomePage> = (props) => {
  // const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [country, setCountry] = useState<string>('test');
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

  const handleClick = (choice: string) => {
    debugger;
    setCountry(choice);
  }

  return (
    <div>
      <h1>Home</h1>
      {country}
      <Typeahead 
        options={countries} 
        onClick={handleClick}
      />
    </div>
  );
}

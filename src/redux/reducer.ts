import { Reducer } from 'redux';
import {
  COUNTRIES_RECEIVED, 
} from './actions';

export interface ISampleReducerState {
  countries: any;
}

const initialState: ISampleReducerState = {
  countries: [],
};

export const sampleReducer: Reducer<ISampleReducerState> = (state = initialState, action) => {
  switch (action.type) {
    case COUNTRIES_RECEIVED:
      // TODO: write your redux code here

      return {
        ...state,
        countries: action.data
      }
  
    default:
      return state;
  }
}

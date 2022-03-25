import { CURRENT_DAY_SET_CURRENT_WEATHER } from './constants';

const initState = {
  cityName: null,
  temp: null,
  country: null,
  icon: null,

};
export const currentDayReducer = (state = initState, action = {}) => {
  switch (action.type) {
    case CURRENT_DAY_SET_CURRENT_WEATHER:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

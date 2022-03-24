import { CURRENT_DAY_SET_CURRENT_WEATHER } from './constatnts';

const initState = {
  cityName: '',
  temp: null,
  country: '',

};
export const currentDayReducer = (state = initState, action = {}) => {
  switch (action.type) {
    case CURRENT_DAY_SET_CURRENT_WEATHER:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

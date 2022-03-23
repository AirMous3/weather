import { CURRENT_DAY_REDUCER_SET_CURRENT_WEATHER } from '@/store/currentDayReducer/constatnts';

const initState = {
  cityName: '',
  temp: 0,
  country: '',

};
export const currentDayReducer = (state = initState, action = {}) => {
  switch (action.type) {
    case CURRENT_DAY_REDUCER_SET_CURRENT_WEATHER:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

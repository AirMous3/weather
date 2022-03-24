import { CURRENT_DAY_SET_CURRENT_WEATHER } from '@/store/currentDayReducer/constatnts';

export const setCurrentDayWeather = (payload) => ({
  type: CURRENT_DAY_SET_CURRENT_WEATHER,
  payload,
});

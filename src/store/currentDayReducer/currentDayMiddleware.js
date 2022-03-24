import { weatherApi } from '@/api/api';
import { setCurrentDayWeather } from '@/store/currentDayReducer/currentDayActions';

export const getCurrentWeatherThunk = (lat, lon) => async (dispatch) => {
  const result = await weatherApi.getCurrentDayWeather(lat, lon);
  const cityName = result.name;
  const temp = (result.main.temp - 273.15).toFixed(1);
  const { country } = result.sys;
  dispatch(setCurrentDayWeather({ cityName, temp, country }));
};

import { openWeatherApi } from '@/api/openWeatherApi';
import { setCurrentDayWeather } from '@/store/currentDayReducer/currentDayActions';

export const getCurrentWeatherThunk = (lat, lon) => async (dispatch) => {
  const result = await openWeatherApi.getCurrentDayWeather(lat, lon);
  console.log(result);
  const cityName = result.name;
  const temp = (result.main.temp - 273.15).toFixed(1);
  const { country } = result.sys;
  dispatch(setCurrentDayWeather({ cityName, temp, country }));
};

import { openWeatherApi } from '@/api/openWeatherApi';
import { setCurrentDayWeather } from '@/store/currentDayReducer/currentDayActions';

export const getCurrentWeatherThunk = (lat, lon) => async (dispatch) => {
  const result = await openWeatherApi.getCurrentDayWeather(lat, lon);
  const cityName = result.name;
  const { temp } = result.main;
  const { country } = result.sys;
  const { icon } = result.weather[0];
  dispatch(setCurrentDayWeather({
    cityName, temp, country, icon,
  }));
};

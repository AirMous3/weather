import { openWeatherApi } from '@/api/openWeatherApi';
import { setWeatherDataTH } from '@/store/upcomingDaysReducer/middlewares';

export const searchByCityNameTH = (city) => async (dispatch) => {
  const result = await openWeatherApi.getCurrentCityWeather(city);
  const { lat, lon } = result.data.coord;
  dispatch(setWeatherDataTH(lat, lon));
};

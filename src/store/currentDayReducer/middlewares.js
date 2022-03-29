import { openWeatherApi } from '@/api/openWeatherApi';
import { setWeatherDataTH } from '@/store/upcomingDaysReducer/middlewares';
import { setAppStatus } from '@/store/appReducer/actions';
import { LOADING } from '@/constants/appStatus';

export const searchByCityNameTH = (city) => async (dispatch) => {
  dispatch(setAppStatus(LOADING));
  const result = await openWeatherApi.getCurrentCityWeather(city);
  const { lat, lon } = result.data.coord;
  dispatch(setWeatherDataTH(lat, lon));
};

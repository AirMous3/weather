import { openWeatherApi } from '@/api/openWeatherApi';
import { setUpcomingDays } from '@/store/upcomingDaysReducer/actions';

export const getUpcomingDays = (lat, lon) => async (dispatch) => {
  const result = await openWeatherApi.getUpcomingDaysWeather(lat, lon);
  const correctDays = result.daily.slice(1, 7);
  localStorage.setItem('weatherData', JSON.stringify(correctDays));
  dispatch(setUpcomingDays(correctDays));
};

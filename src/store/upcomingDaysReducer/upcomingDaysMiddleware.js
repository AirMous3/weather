import { openWeatherApi } from '@/api/openWeatherApi';
import { setUpcomingDays } from '@/store/upcomingDaysReducer/upcomingDaysActions';

export const getUpcomingDays = (lat, lon) => async (dispatch) => {
  const result = await openWeatherApi.getUpcomingDaysWeather(lat, lon);
  localStorage.setItem('weatherData', JSON.stringify(result));
  dispatch(setUpcomingDays(result));
};

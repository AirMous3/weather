import { weatherApi } from '@/api/api';
import { setUpcomingDays } from '@/store/upcomingDaysReducer/upcomingDaysActions';
import { getWeekDays } from '@/helpers/getWeekDays';

export const getUpcomingDays = (lat, lon) => async (dispatch) => {
  const result = await weatherApi.getUpcomingDaysWeather(lat, lon);
  const weekDays = getWeekDays(result);
  const filteredDays = result.filter((d) => weekDays.includes(d.time)).slice(1);
  localStorage.setItem('weatherData', JSON.stringify(filteredDays));
  dispatch(setUpcomingDays(filteredDays));
};

import { openWeatherApi } from '@/api/openWeatherApi';
import { CURRENT_DAY_WEATHER, WEATHER_DATA } from '@/constants/localstorage';
import { setCurrentDayWeather } from '@/store/currentDayReducer/actions';
import { setUpcomingDays } from '@/store/upcomingDaysReducer/actions';

export const setWeatherDataTH = (lat, lon) => async (dispatch) => {
  const result = await openWeatherApi.getWeatherData(lat, lon);
  const currentDayWeather = {
    temp: result.current.temp,
    icon: result.current.weather[0].icon,
    country: result.timezone.split('/')[0],
    cityName: result.timezone.split('/')[1],
  };
  dispatch(setCurrentDayWeather(currentDayWeather));
  localStorage.setItem(CURRENT_DAY_WEATHER, JSON.stringify(currentDayWeather));

  const upcomingDays = result.daily.slice(1, 7);
  localStorage.setItem(WEATHER_DATA, JSON.stringify(upcomingDays));

  dispatch(setUpcomingDays(upcomingDays));
};

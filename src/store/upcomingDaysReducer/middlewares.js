import { openWeatherApi } from '@/api/openWeatherApi';
import { CURRENT_DAY_WEATHER, WEATHER_DATA } from '@/constants/localstorage';
import { extractCurrentDayWeather } from '@/helpers/extractCurrentDayWeather';
import { setMainImage } from '@/store/appReducer/actions';
import { setCurrentDayWeather } from '@/store/currentDayReducer/actions';
import { setUpcomingDays } from '@/store/upcomingDaysReducer/actions';

export const setWeatherDataTH = (lat, lon) => async (dispatch) => {
  const result = await openWeatherApi.getWeatherData(lat, lon);
  const upcomingDays = result.daily.slice(1, 7);
  const { mainImage } = extractCurrentDayWeather(result);

  dispatch(setCurrentDayWeather(extractCurrentDayWeather(result)));
  dispatch(setMainImage(mainImage));

  localStorage.setItem(
    CURRENT_DAY_WEATHER,
    JSON.stringify(extractCurrentDayWeather(result)),
  );

  localStorage.setItem(WEATHER_DATA, JSON.stringify(upcomingDays));

  dispatch(setUpcomingDays(upcomingDays));
};

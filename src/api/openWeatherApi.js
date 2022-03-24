import axios from 'axios';

export const openWeatherApi = {
  getCurrentDayWeather(lat, lon) {
    return axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_OPEN_WEATHER_API_KEY}`,
      )
      .then((res) => res.data);
  },
  getUpcomingDaysWeather(lat, lon) {
    return axios.get(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_OPEN_WEATHER_API_KEY}&exclude=minutely,hourly,alerts&units=metric&lang=en`
      ,
    ).then((res) => res.data);
  },

};

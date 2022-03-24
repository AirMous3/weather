import axios from 'axios';

const end = '2022-03-31';
const params = 'airTemperature,pressure,cloudCover,humidity,windSpeed,visibility';
const headers = {
  Authorization: `${process.env.REACT_APP_STORMGLASS_API_KEY}`,
};

export const weatherApi = {
  getCurrentDayWeather(lat, lon) {
    return axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_CURRENT_WEATHER_API_KEY}`,
    ).then((res) => res.data);
  },
  getUpcomingDaysWeather(lat, lon) {
    return axios.get(`https://api.stormglass.io/v2/weather/point?lat=${lat}&lng=${lon}&params=${params}&end=${end}`, { headers })
      .then((res) => res.data.hours);
  },
};

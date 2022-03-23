import axios from 'axios';

export const weatherApi = {
  getCurrentDayWeather(lat, lon) {
    return axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_CURRENT_WEATHER}`,
    ).then((res) => res.data);
  },
};

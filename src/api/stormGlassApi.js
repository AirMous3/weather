// import axios from 'axios';
//
// const end = '2022-03-31';
// const params = 'airTemperature,pressure,cloudCover,humidity,windSpeed,visibility';
// const headers = {
//   Authorization: `${process.env.REACT_APP_STORMGLASS_API_KEY}`,
// };
//
// export const stormGlassApi = {
//   getUpcomingDaysWeather(lat, lon) {
//     return axios
//       .get(
//         `https://api.stormglass.io/v2/weather/point?lat=${lat}&lng=${lon}&params=${params}&end=${end}`,
//         { headers },
//       )
//       .then((res) => res.data.hours);
//   },
// };

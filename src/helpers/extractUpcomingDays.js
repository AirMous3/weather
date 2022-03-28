import { getSunriseSunset } from '@/helpers/getSunriseSunset';

export const extractUpcomingDays = (weather) => weather.map((i) => ({
  ...i,
  temp: Math.round(i.temp.day),
  feelsLike: Math.round(i.feels_like.day),
  windSpeed: i.wind_speed,
  mainImage: i.weather[0].main,
  sunrise: getSunriseSunset(i.sunrise),
  sunset: getSunriseSunset(i.sunset),
}));

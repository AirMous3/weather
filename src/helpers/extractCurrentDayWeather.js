import { getSunriseSunset } from '@/helpers/getSunriseSunset';

export const extractCurrentDayWeather = (weather, cityName) => {
  const result = weather.current;
  const countryAndCityName = weather.timezone.split('/');
  const mainImage = result.weather[0].main;
  return {
    temp: Math.round(result.temp),
    icon: result.weather[0].icon,
    country: countryAndCityName[0],
    cityName: cityName || countryAndCityName[1],
    sunrise: getSunriseSunset(result.sunrise),
    sunset: getSunriseSunset(result.sunset),
    pressure: result.pressure,
    humidity: result.humidity,
    windSpeed: result.wind_speed,
    feelsLike: Math.round(result.feels_like),
    mainImage,
  };
};

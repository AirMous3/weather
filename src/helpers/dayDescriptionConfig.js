export const dayDescriptionConfig = (
  sunrise,
  sunset,
  temp,
  feelsLike,
  pressure,
  humidity,
  windSpeed,
) => [
  {
    label: 'Sunrise',
    value: sunrise,
  },
  {
    label: 'Sunset',
    value: sunset,
  },
  {
    label: 'Temp',
    value: `${temp}°`,
  },
  {
    label: 'Feels Like',
    value: `${feelsLike}°`,
  },
  {
    label: 'Pressure',
    value: `${pressure} mm,Hg`,
  },
  {
    label: 'Humidity',
    value: `${humidity}%`,
  },
  {
    label: 'Wind Speed',
    value: `${windSpeed} m/s`,
  },
];

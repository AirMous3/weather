import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { dayDescriptionConfig } from '@/helpers/dayDescriptionConfig';

export const UpcomingDayInfo = () => {
  const dayId = useParams();
  const upcomingDays = useSelector((state) => state.upcomingDays);
  const currentDay = upcomingDays.filter((day) => day.dt === Number(dayId['*']));
  const {
    humidity, pressure, sunrise, sunset,
  } = currentDay[0];
  const temp = currentDay[0].temp.day;
  const feelsLike = currentDay[0].feels_like.day;
  const windSpeed = currentDay[0].wind_speed;

  return (
    <div>
      <div>
        Details
        <ul>
          {dayDescriptionConfig(
            feelsLike,
            humidity,
            pressure,
            sunrise,
            sunset,
            temp,
            windSpeed,
          ).map(({ label, value }, index) => (
            <li key={index}>
              {label}
              :
              {value}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

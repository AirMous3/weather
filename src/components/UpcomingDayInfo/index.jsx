import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { upcomingDaysConfig } from '@/components/UpcomingDay/config';
import { TitleWrapper } from '@/components/UpcomingDayInfo/components';
import { dayDescriptionConfig } from '@/helpers/dayDescriptionConfig';
import { getCurrentDay } from '@/helpers/getCurrentDay';

export const UpcomingDayInfo = () => {
  const dayId = useParams();
  const upcomingDays = useSelector((state) => state.upcomingDays);

  const currentDay = upcomingDays.filter((day) => day.dt === Number(dayId['*']));
  const title = upcomingDaysConfig[getCurrentDay(currentDay[0].dt)];
  const {
    humidity, pressure, sunrise, sunset,
  } = currentDay[0];
  const temp = currentDay[0].temp.day;
  console.log(temp);
  const feelsLike = currentDay[0].feels_like.day;
  const windSpeed = currentDay[0].wind_speed;

  return (
    <div>
      <TitleWrapper>{title}</TitleWrapper>
      <div>
        Details
        <ul>
          {dayDescriptionConfig(
            sunrise,
            sunset,
            temp,
            feelsLike,
            pressure,
            humidity,
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

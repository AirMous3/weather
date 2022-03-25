import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { dayDescriptionConfig } from '@/helpers/dayDescriptionConfig';
import { getFullDate } from '@/helpers/getFullDate';

import {
  CurrentDayCity,
  CurrentDayCountry,
  CurrentDayDescription,
  CurrentDayTime,
  CurrentDayTitle,
  CurrentDayWrapper,
} from './components';

export const CurrentDay = () => {
  const { day, time, month } = getFullDate();
  const [currentDay] = useState(day);
  const [currentMonth] = useState(month);
  const [currentTime] = useState(time);

  const {
    cityName,
    country,
    feelsLike,
    humidity,
    pressure,
    sunrise,
    sunset,
    temp,
    windSpeed,
  } = useSelector((state) => state.currentDay);

  return (
    <div>
      <CurrentDayTitle>
        <div>
          <CurrentDayTime>{currentTime}</CurrentDayTime>
          <CurrentDayWrapper>
            {currentDay}
            ,
            {currentMonth}
          </CurrentDayWrapper>
        </div>
        <div>
          <CurrentDayCity>{cityName}</CurrentDayCity>
          <CurrentDayCountry>{country}</CurrentDayCountry>
        </div>
      </CurrentDayTitle>
      <CurrentDayDescription>
        <div>Details</div>
        <ul>
          {dayDescriptionConfig(
            sunrise,
            sunset,
            temp,
            feelsLike,
            humidity,
            pressure,
            windSpeed,
          ).map(({ label, value }, index) => (
            <li key={index}>
              {label}
              :
              {value}
            </li>
          ))}
        </ul>
      </CurrentDayDescription>
    </div>
  );
};

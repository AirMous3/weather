import React from 'react';
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
          <CurrentDayTime>{time}</CurrentDayTime>
          <CurrentDayWrapper>
            {day}
            ,
            {month}
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
            pressure,
            humidity,
            windSpeed,
          ).map(({ label, value }, index) => (
            <li key={index}>
              {label}
              :
              {' '}
              {value}
            </li>
          ))}
        </ul>
      </CurrentDayDescription>
    </div>
  );
};

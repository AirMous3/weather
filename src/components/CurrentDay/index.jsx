import moment from 'moment';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';

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

  const { cityName } = useSelector((state) => state.currentDay);
  const { country } = useSelector((state) => state.currentDay);
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
      <CurrentDayDescription>123</CurrentDayDescription>
    </div>
  );
};

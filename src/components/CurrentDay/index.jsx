import moment from 'moment';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { CurrentDayTitle } from './components';

export const CurrentDay = () => {
  const [currentDay] = useState(moment().format('dddd'));
  const [currentMonth] = useState(moment().format('MMMM Do YYYY'));
  const [currentTime] = useState(moment().format('h:mm a'));

  const { cityName } = useSelector((state) => state.currentDay);
  const { country } = useSelector((state) => state.currentDay);
  return (
    <CurrentDayTitle>
      <div>
        <div>{currentTime}</div>
        <div>
          {currentDay}
          ,
          {currentMonth}
        </div>
      </div>
      <div>
        <div>{cityName}</div>
        <div>{country}</div>
      </div>
    </CurrentDayTitle>
  );
};

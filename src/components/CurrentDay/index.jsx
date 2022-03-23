import moment from 'moment';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { CurrentDayTitle } from './components';

export const CurrentDay = () => {
  const [time, setTime] = useState(moment().format('MMMM Do YYYY, h:mm a'));
  const { cityName } = useSelector((state) => state.currentDay);
  const { country } = useSelector((state) => state.currentDay);
  return (
    <div>
      <CurrentDayTitle>
        <div>
          <div>{time}</div>
        </div>
        <div>
          <div>{cityName}</div>
          <div>{country}</div>
        </div>
      </CurrentDayTitle>
    </div>
  );
};

import React from 'react';

import { upcomingDaysConfig } from './config';
import { getCurrentDay } from '@/helpers/getCurrentDay';
import { StyledLi, UpcomingDaysTemp } from './components';

export const UpcomingDay = ({ time, img, temp }) => {
  const day = upcomingDaysConfig[getCurrentDay(time)];
  return (
    <StyledLi>

      <span>{day}</span>

      <img src={`http://openweathermap.org/img/wn/${img[0].icon}@2x.png`} alt="weatherIcon" />
      <UpcomingDaysTemp>
        {temp}
        °
      </UpcomingDaysTemp>
    </StyledLi>
  );
};

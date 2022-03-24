import React from 'react';

import { upcomingDaysConfig } from './config';
import { getCurrentDay } from '@/helpers/getCurrentDay';
import { StyledLi, UpcomingDaysTemp } from './components';

export const UpcomingDay = ({ time, img, temp }) => {
  const day = upcomingDaysConfig[getCurrentDay(time)];
  return (
    <StyledLi>

      <span>{day}</span>

      <img src={img} alt="weatherIcon" />
      <UpcomingDaysTemp>
        {temp}
        °
      </UpcomingDaysTemp>
    </StyledLi>
  );
};

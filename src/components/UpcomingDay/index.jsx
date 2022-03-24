import React from 'react';

import { upcomingDaysConfig } from './config';
import { getCurrentDay } from '@/helpers/getCurrentDay';
import { StyledLi, UpcomingDaysTemp } from './components';
import { getWeatherIcon } from '@/helpers/getWeatherIcon';

export const UpcomingDay = ({ time, img, temp }) => {
  const day = upcomingDaysConfig[getCurrentDay(time)];
  return (
    <StyledLi>

      <span>{day}</span>

      <img src={getWeatherIcon(img[0].icon)} alt="weatherIcon" />
      <UpcomingDaysTemp>
        {temp}
        °
      </UpcomingDaysTemp>
    </StyledLi>
  );
};

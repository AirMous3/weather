import React from 'react';

import { getCurrentDay } from '@/helpers/getCurrentDay';
import { getWeatherIcon } from '@/helpers/getWeatherIcon';

import { Link, StyledLi, UpcomingDaysTemp } from './components';
import { upcomingDaysConfig } from './config';

export const UpcomingDay = ({ dt, img, temp }) => {
  const day = upcomingDaysConfig[getCurrentDay(dt)];
  return (
    <Link to={`upcomingDayInfo/${dt}`}>
      <StyledLi>
        <span>{day}</span>

        <img src={getWeatherIcon(img[0].icon)} alt="weatherIcon" />
        <UpcomingDaysTemp>
          {Math.round(temp)}
          °
        </UpcomingDaysTemp>
      </StyledLi>
    </Link>
  );
};

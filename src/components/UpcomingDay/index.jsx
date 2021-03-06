import React from 'react';

import { getCurrentDay } from '@/helpers/getCurrentDay';
import { getWeatherIcon } from '@/helpers/getWeatherIcon';

import { Link, StyledLi, UpcomingDaysTemp } from './components';
import { upcomingDaysConfig } from './config';

export const UpcomingDay = ({ dt, weather, temp }) => {
  const img = weather[0].icon;
  const day = upcomingDaysConfig[getCurrentDay(dt)];
  return (
    <Link to={`upcomingDayInfo/${dt}`}>
      <StyledLi>
        <span>{day}</span>

        <img src={getWeatherIcon(img)} alt="weatherIcon" />
        <UpcomingDaysTemp>
          {temp}
          °
        </UpcomingDaysTemp>
      </StyledLi>
    </Link>
  );
};

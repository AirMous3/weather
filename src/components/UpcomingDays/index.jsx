import React from 'react';
import { useSelector } from 'react-redux';

import { UpcomingDaysList } from '@/components/UpcomingDaysList';
import { getWeatherIcon } from '@/helpers/getWeatherIcon';

import {
  CurrentDayContainer,
  TodayTemp,
  TodayTitle,
  UpcomingDaysContainer,
} from './components';

export const UpcomingDays = () => {
  const todayTemperature = useSelector((st) => st.currentDay.temp);
  const currentDayImage = useSelector((st) => st.currentDay.icon);
  return (
    <UpcomingDaysContainer>
      <CurrentDayContainer>
        <img src={getWeatherIcon(currentDayImage)} alt="weatherIcon" />
        <div>
          <TodayTitle>
            <span>TODAY</span>
          </TodayTitle>
          <TodayTemp>
            {todayTemperature}
            °
          </TodayTemp>
        </div>
      </CurrentDayContainer>
      <UpcomingDaysList />
    </UpcomingDaysContainer>
  );
};

import React from 'react';
import { useSelector } from 'react-redux';

import { UpcomingDay } from '@/components/UpcomingDay';

import {
  CurrentDayContainer,
  TodayTemp,
  TodayTitle,
  UpcomingDaysContainer,
  UpcomingDaysList,
} from './components';

export const UpcomingDays = () => {
  const upcomingDays = useSelector((st) => st.upcomingDays);
  const todayTemperature = useSelector((st) => st.currentDay.temp);
  return (
    <UpcomingDaysContainer>
      <CurrentDayContainer>
        <img src="img" alt="weatherIcon" />
        <div>
          <TodayTitle>TODAY</TodayTitle>
          <TodayTemp>
            {todayTemperature}
            °
          </TodayTemp>
        </div>
      </CurrentDayContainer>
      <UpcomingDaysList>
        {upcomingDays.map(({ dt, temp: { max }, weather }, index) => (
          <UpcomingDay key={index} temp={max} time={dt} img={weather} />
        ))}
      </UpcomingDaysList>
    </UpcomingDaysContainer>
  );
};

import React from 'react';
import { useSelector } from 'react-redux';

import { UpcomingDay } from '@/components/UpcomingDay';
import { getWeatherIcon } from '@/helpers/getWeatherIcon';

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
      <UpcomingDaysList>
        {upcomingDays.map(({ dt, temp: { max }, weather }) => (
          <UpcomingDay key={dt} temp={max} dt={dt} img={weather} />
        ))}
      </UpcomingDaysList>
    </UpcomingDaysContainer>
  );
};

import React from 'react';
import { useSelector } from 'react-redux';

import { UpcomingDay } from '@/components/UpcomingDay';

import { UpcomingDaysContainer, UpcomingDaysList } from './components';

export const UpcomingDays = () => {
  const upcomingDays = useSelector((st) => st.upcomingDays);
  const todayTemperature = useSelector((st) => st.currentDay.temp);
  return (
    <UpcomingDaysContainer>
      <div style={{ display: 'flex' }}>
        <img src="img" alt="weatherIcon" />
        <div>
          <div>Today</div>
          <div>{todayTemperature}</div>
        </div>
      </div>
      <UpcomingDaysList>
        {upcomingDays.map(({ airTemperature: { noaa }, time }, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <UpcomingDay key={index} temp={noaa} time={time} />
        ))}
      </UpcomingDaysList>
    </UpcomingDaysContainer>
  );
};

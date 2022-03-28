import React from 'react';
import { useSelector } from 'react-redux';

import { UpcomingDay } from '@/components/UpcomingDay';
import { UpcomingDaysWrapper } from './components';

export const UpcomingDaysList = () => {
  const upcomingDays = useSelector((st) => st.upcomingDays);
  return (
    <UpcomingDaysWrapper>
      {upcomingDays.map(({ dt, temp: { max }, weather }) => (
        <UpcomingDay key={dt} temp={max} dt={dt} img={weather} />
      ))}
    </UpcomingDaysWrapper>
  );
};

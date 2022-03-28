import React from 'react';
import { useSelector } from 'react-redux';

import { UpcomingDay } from '@/components/UpcomingDay';
import { UpcomingDaysWrapper } from './components';

export const UpcomingDaysList = () => {
  const upcomingDays = useSelector((st) => st.upcomingDays);
  return (
    <UpcomingDaysWrapper>
      {upcomingDays.map(({ dt, temp, weather }) => (
        <UpcomingDay key={dt} temp={temp} dt={dt} weather={weather} />
      ))}
    </UpcomingDaysWrapper>
  );
};

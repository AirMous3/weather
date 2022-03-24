import React from 'react';

import { upcomingDaysConfig } from '@/components/UpcomingDay/config';
import { getCurrentDay } from '@/helpers/getCurrentDay';

export const UpcomingDay = ({ time, img, temp }) => {
  const day = upcomingDaysConfig[getCurrentDay(time)];
  return (
    <li>
      <div>{day}</div>
      <img src={img} alt="weatherIcon" />
      <div>{temp}</div>
    </li>
  );
};

import React from 'react';

import { UpcomingDaysContainer, UpcomingDaysList } from './components';

export const UpcomingDays = () => (
  <UpcomingDaysContainer>
    <div style={{ display: 'flex' }}>
      <div>img</div>
      <div>
        <div>today</div>
        <div>12*</div>
      </div>
    </div>
    <UpcomingDaysList>
      <li>
        <div>tue</div>
        <div>img</div>
        <div>12*</div>
      </li>
      <li>
        <div>wed</div>
        <div>img</div>
        <div>12*</div>
      </li>
      <li>
        <div>thu</div>
        <div>img</div>
        <div>12*</div>
      </li>
      <li>
        <div>fri</div>
        <div>img</div>
        <div>12*</div>
      </li>
      <li>
        <div>sat</div>
        <div>img</div>
        <div>12*</div>
      </li>
      <li>
        <div>sun</div>
        <div>img</div>
        <div>12*</div>
      </li>
    </UpcomingDaysList>
  </UpcomingDaysContainer>
);

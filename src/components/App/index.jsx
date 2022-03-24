import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { usePosition } from 'use-position';

import { CurrentDay } from '@/components/CurrentDay';
import { UpcomingDays } from '@/components/UpcomingDays';
import { getCurrentWeatherThunk } from '@/store/currentDayReducer/currentDayMiddleware';
import { setGeolocation } from '@/store/geolocationReducer/geolocationActions';
import { setUpcomingDays } from '@/store/upcomingDaysReducer/upcomingDaysActions';
import { getUpcomingDays } from '@/store/upcomingDaysReducer/upcomingDaysMiddleware';

import { Container, Main } from './components';

export function App() {
  const dispatch = useDispatch();
  const { latitude, longitude } = usePosition();

  if (latitude) dispatch(setGeolocation(latitude, longitude));

  useEffect(() => {
    if (latitude) {
      dispatch(getCurrentWeatherThunk(latitude, longitude));
    }
  }, [latitude]);

  useEffect(() => {
    if (!JSON.parse(localStorage.getItem('weatherData'))) {
      if (latitude) {
        dispatch(getUpcomingDays(latitude, longitude));
      }
    }
  }, [latitude]);
  useEffect(() => {
    dispatch(setUpcomingDays(JSON.parse(localStorage.getItem('weatherData'))));
  }, []);
  return (
    <Main>
      <Container>
        <CurrentDay />
        <UpcomingDays />
      </Container>
    </Main>
  );
}

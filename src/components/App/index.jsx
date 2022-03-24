import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { usePosition } from 'use-position';

import { CurrentDay } from '@/components/CurrentDay';
import { UpcomingDays } from '@/components/UpcomingDays';
import { getCurrentWeatherThunk } from '@/store/currentDayReducer/middlewares';
import { setGeolocation } from '@/store/geolocationReducer/actions';
import { setUpcomingDays } from '@/store/upcomingDaysReducer/actions';
import { getUpcomingDays } from '@/store/upcomingDaysReducer/middlewares';

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

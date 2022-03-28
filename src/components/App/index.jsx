import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { usePosition } from 'use-position';

import { CurrentDay } from '@/components/CurrentDay';
import { Preloader } from '@/components/Preloader';
import { UpcomingDayInfo } from '@/components/UpcomingDayInfo';
import { UpcomingDays } from '@/components/UpcomingDays';
import { CURRENT_DAY_WEATHER, WEATHER_DATA } from '@/constants/localstorage';
import { getFromLocalStorage } from '@/helpers/getFromLocalStorage';
import { setAppInitialize, setMainImage } from '@/store/appReducer/actions';
import { setCurrentDayWeather } from '@/store/currentDayReducer/actions';
import { setUpcomingDays } from '@/store/upcomingDaysReducer/actions';
import { setWeatherDataTH } from '@/store/upcomingDaysReducer/middlewares';

import { Container, Main } from './components';

export function App() {
  const dispatch = useDispatch();
  const { latitude, longitude } = usePosition();
  const isInitialized = useSelector((st) => st.app.isInitialized);
  const mainImage = useSelector((st) => st.app.mainImage);

  useEffect(() => {
    if (!JSON.parse(localStorage.getItem(WEATHER_DATA))) {
      if (latitude) {
        dispatch(setWeatherDataTH(latitude, longitude));
      }
    }
  }, [latitude]);

  useEffect(() => {
    dispatch(setUpcomingDays(getFromLocalStorage(WEATHER_DATA)));
    dispatch(setCurrentDayWeather(getFromLocalStorage(CURRENT_DAY_WEATHER)));
    dispatch(setMainImage(getFromLocalStorage(CURRENT_DAY_WEATHER).mainImage));
    dispatch(setAppInitialize(true));
  }, [latitude]);

  if (!isInitialized) return <Preloader />;
  return (
    <Main mode={mainImage}>
      <Container>
        <Routes>
          <Route
            path="/"
            element={(
              <>
                <CurrentDay />
                <UpcomingDays />
              </>
            )}
          />
          <Route path="upcomingDayInfo/*" element={<UpcomingDayInfo />} />
        </Routes>
      </Container>
    </Main>
  );
}

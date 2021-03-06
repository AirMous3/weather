import React, { Suspense, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { usePosition } from 'use-position';

import { CurrentDay } from '@/components/CurrentDay';
import { Header } from '@/components/Header';
import { Preloader } from '@/components/Preloader';
import { UpcomingDays } from '@/components/UpcomingDays';
import { CURRENT_DAY_WEATHER, WEATHER_DATA } from '@/constants/localstorage';
import { getFromLocalStorage } from '@/helpers/getFromLocalStorage';
import { setAppInitialize, setMainImage } from '@/store/appReducer/actions';
import { setCurrentDayWeather } from '@/store/currentDayReducer/actions';
import { setUpcomingDays } from '@/store/upcomingDaysReducer/actions';
import { setWeatherDataTH } from '@/store/upcomingDaysReducer/middlewares';

import { Container, Main } from './components';

const UpcomingDayInfo = React.lazy(() => import('@/components/UpcomingDayInfo'));

export function App() {
  const dispatch = useDispatch();

  const { latitude, longitude } = usePosition();

  const isInitialized = useSelector((st) => st.app.isInitialized);
  const mainImage = useSelector((st) => st.app.mainImage);

  const [isData, setIsData] = useState(false);

  useEffect(() => {
    if (!getFromLocalStorage(WEATHER_DATA) && latitude) {
        dispatch(setWeatherDataTH(latitude, longitude, setIsData));
    }
  }, [latitude]);

  useEffect(() => {
    if (getFromLocalStorage(WEATHER_DATA)) {
      dispatch(setUpcomingDays(getFromLocalStorage(WEATHER_DATA)));
      dispatch(setCurrentDayWeather(getFromLocalStorage(CURRENT_DAY_WEATHER)));
      dispatch(setMainImage(getFromLocalStorage(CURRENT_DAY_WEATHER).mainImage));
      dispatch(setAppInitialize(true));
    }
  }, [isData]);

  if (!isInitialized) return <Preloader />;

  return (
    <Main mode={mainImage}>
      <Container>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <CurrentDay />
                <UpcomingDays />
              </>
            }
          />
          <Route
            path="upcomingDayInfo/*"
            element={
              <Suspense fallback={<Preloader />}>
                <UpcomingDayInfo />
              </Suspense>
            }
          />
        </Routes>
      </Container>
    </Main>
  );
}

import axios from 'axios';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { usePosition } from 'use-position';

import { weatherApi } from '@/api/api';
import { CurrentDay } from '@/components/CurrentDay';
import { UpcomingDays } from '@/components/UpcomingDays';
import { setGeolocation } from '@/store/geolocationReducer/geolocationActions';

import { Container } from './components';
import { getCurrentWeatherThunk } from '@/store/currentDayReducer/currentDayMiddleware';

export function App() {
  const [state, setState] = useState();
  const dispatch = useDispatch();
  const { latitude, longitude } = usePosition();
  console.log(state);
  if (latitude) dispatch(setGeolocation(latitude, longitude));

  // const params = 'windSpeed';
  // useEffect(() => {
  //   if (latitude) {
  //     fetch(
  //       `https://api.stormglass.io/v2/weather/point?lat=${latitude}&lng=${longitude}&params=${params}`,
  //       {
  //         headers: {
  //           Authorization:
  //             '099f378c-a9ec-11ec-812f-0242ac130002-099f382c-a9ec-11ec-812f-0242ac130002',
  //         },
  //       },
  //     )
  //       .then((response) => response.json())
  //       .then((jsonData) => {
  //         setState(jsonData);
  //       });
  //   }
  // }, [latitude]);

  useEffect(() => {
    if (latitude) {
      dispatch(getCurrentWeatherThunk(latitude, longitude));
    }
  }, [latitude]);
  return (
    <Container>
      <CurrentDay />
      <UpcomingDays />
    </Container>
  );
}

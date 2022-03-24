import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { usePosition } from 'use-position';

import { CurrentDay } from '@/components/CurrentDay';
import { UpcomingDays } from '@/components/UpcomingDays';
import { setGeolocation } from '@/store/geolocationReducer/geolocationActions';

import { Container } from './components';
import { setUpcomingDays } from '@/store/upcomingDaysReducer/upcomingDaysActions';

export function App() {
  const [state, setState] = useState([]);
  const [dataOnWeek, setDataOnWeek] = useState([]);
  const dispatch = useDispatch();
  const { latitude, longitude } = usePosition();
  if (latitude) dispatch(setGeolocation(latitude, longitude));
  const end = '2022-03-31';
  const params = 'airTemperature,pressure,cloudCover,humidity,windSpeed,visibility';

  const getWeekDays = (data) => {
    const resultDays = [];
    for (let i = 1; i < data.length; i += 1) {
      if (new Date(data[i].time).getHours() === 14) {
        resultDays.push(data[i].time);
      }
    }
    return resultDays;
  };

  useEffect(() => {
    const allData = JSON.parse(localStorage.getItem('weatherData'));
    setState(allData);
    const weekData = getWeekDays(allData.hours);
    dispatch(setUpcomingDays(getWeekDays(allData.hours)));
    setDataOnWeek(weekData);
  }, []);

  // useEffect(() => {
  //   if (latitude) {
  //     fetch(
  //       `https://api.stormglass.io/v2/weather/point?lat=${latitude}&lng=${longitude}&params=${params}&end=${end}`,
  //       {
  //         headers: {
  //           Authorization:
  //             '9143ce6c-aaa7-11ec-9a99-0242ac130002-9143ceee-aaa7-11ec-9a99-0242ac130002',
  //         },
  //       },
  //     )
  //       .then((response) => response.json())
  //       .then((jsonData) => {
  //         setState(jsonData);
  //         localStorage.setItem('weatherData', JSON.stringify(jsonData));
  //       });
  //   }
  // }, [latitude]);

  // useEffect(() => {
  //   if (latitude) {
  //     dispatch(getCurrentWeatherThunk(latitude, longitude));
  //   }
  // }, [latitude]);
  return (
    <Container>
      <CurrentDay />
      <UpcomingDays />
    </Container>
  );
}

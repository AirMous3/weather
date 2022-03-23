import React from 'react';
import { useDispatch } from 'react-redux';
import { usePosition } from 'use-position';

import { CurrentDay } from '@/components/CurrentDay';
import { UpcomingDays } from '@/components/UpcomingDays';
import { setGeolocation } from '@/store/geolocationReducer/geolocationActions';

import { Container } from './components';

export function App() {
  const dispatch = useDispatch();
  const { latitude, longitude } = usePosition();

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
  return (
    <Container>
      <CurrentDay />
      <UpcomingDays />
    </Container>
  );
}

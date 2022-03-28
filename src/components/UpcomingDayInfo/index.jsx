import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { upcomingDaysConfig } from '@/components/UpcomingDay/config';
import { dayDescriptionConfig } from '@/helpers/dayDescriptionConfig';
import { getCurrentDay } from '@/helpers/getCurrentDay';
import { setMainImage } from '@/store/appReducer/actions';

import {
  UpcomingDayInfoContainer,
  UpcomingDayInfoTitle,
  UpcomingDayInfoUlWrapper,
} from './components';
import { getSunriseSunset } from '@/helpers/getSunriseSunset';

export const UpcomingDayInfo = () => {
  const dispatch = useDispatch();
  const dayId = useParams();
  const upcomingDays = useSelector((state) => state.upcomingDays);
  const mainDayPicture = useSelector((state) => state.currentDay.mainImage);

  const currentDay = upcomingDays.filter((day) => day.dt === Number(dayId['*']));
  const title = upcomingDaysConfig[getCurrentDay(currentDay[0].dt)];
  const {
    humidity, pressure,
  } = currentDay[0];
  const temp = currentDay[0].temp.day;
  const feelsLike = currentDay[0].feels_like.day;
  const windSpeed = currentDay[0].wind_speed;
  const mainImage = currentDay[0].weather[0].main;
  const sunrise = getSunriseSunset(currentDay[0].sunrise);
  const sunset = getSunriseSunset(currentDay[0].sunset);

  useEffect(() => {
    dispatch(setMainImage(mainImage));
    return () => dispatch(setMainImage(mainDayPicture));
  }, [mainImage]);

  return (
    <UpcomingDayInfoContainer>
      <UpcomingDayInfoTitle>{title}</UpcomingDayInfoTitle>
      <div>
        Details
        <UpcomingDayInfoUlWrapper>
          {dayDescriptionConfig(
            sunrise,
            sunset,
            temp,
            feelsLike,
            pressure,
            humidity,
            windSpeed,
          ).map(({ label, value }, index) => (
            <li key={index}>
              {label}
              :
              {' '}
              {value}
            </li>
          ))}
        </UpcomingDayInfoUlWrapper>
      </div>
    </UpcomingDayInfoContainer>
  );
};

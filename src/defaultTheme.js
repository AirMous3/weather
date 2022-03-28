import { css } from 'styled-components';
import defaultImage from '@/assets/defaultImage.jpg';
import cloudsImage from '@/assets/massiveClouds.jpg';
import rainImage from '@/assets/rain.jpg';
import snowImage from '@/assets/snow.jpg';
import thunderStormImage from '@/assets/thunderstorm.jpg';

const SCREEN_SIZES = {
  mobileM: 420,
  mobileL: 640,
};

const above = Object.keys(SCREEN_SIZES).reduce((acc, key) => {
  acc[key] = (...args) => css`
    @media (min-width: ${SCREEN_SIZES[key]}px) {
      ${css(...args)}
    }
  `;
  return acc;
}, {});

const below = Object.keys(SCREEN_SIZES).reduce((acc, key) => {
  acc[key] = (...args) => css`
    @media (max-width: ${SCREEN_SIZES[key]}px) {
      ${css(...args)}
    }
  `;
  return acc;
}, {});

export const defaultTheme = {
  above,
  below,
  defaultImage,
  Clouds: cloudsImage,
  Rain: rainImage,
  Snow: snowImage,
  Thunderstorm: thunderStormImage,
  fontSize: [
    '20px', // 0
    '40px', // 1
    '70px', // 2
  ],
  spaces: [
    '0px', // 0
    '10px', // 1
    '20px', // 2
    '30px', // 3
    '40px', // 4
    '50px', // 5
  ],
};

import { GEO_SET_GEO } from './constants';

export const setGeolocation = (latitude, longitude) => ({
  type: GEO_SET_GEO,
  longitude,
  latitude,
});

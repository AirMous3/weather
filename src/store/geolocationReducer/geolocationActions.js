import { GEO_REDUCER_SET_GEO } from './constants';

export const setGeolocation = (latitude, longitude) => ({
  type: GEO_REDUCER_SET_GEO,
  longitude,
  latitude,
});

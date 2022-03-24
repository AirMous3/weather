import { GEO_SET_GEO } from './constants';

const initialState = {
  latitude: '',
  longitude: '',
};
export const geolocationReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case GEO_SET_GEO:
      return { ...state, latitude: action.latitude, longitude: action.longitude };

    default:
      return state;
  }
};

import { IDLE } from '@/constants/appStatus';

import {
  APP_SET_API,
  APP_SET_APP_INITIALIZE,
  APP_SET_APP_STATUS,
  APP_SET_MAIN_IMAGE,
} from './constants';

const initState = {
  isInitialized: false,
  mainImage: '',
  api: 'openWeather',
  status: IDLE,
};
export const appReducer = (state = initState, action = {}) => {
  switch (action.type) {
    case APP_SET_APP_INITIALIZE:
      return { ...state, isInitialized: action.initialize };
    case APP_SET_MAIN_IMAGE:
      return { ...state, mainImage: action.mainImage };
    case APP_SET_API:
      return { ...state, api: action.api };
    case APP_SET_APP_STATUS:
      return { ...state, status: action.status };
    default:
      return state;
  }
};

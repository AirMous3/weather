import { APP_SET_APP_INITIALIZE, APP_SET_MAIN_IMAGE } from '@/store/appReducer/constants';

const initState = {
  isInitialized: false,
  mainImage: '',
};
export const appReducer = (state = initState, action = {}) => {
  switch (action.type) {
    case APP_SET_APP_INITIALIZE:
      return { ...state, isInitialized: action.initialize };
    case APP_SET_MAIN_IMAGE:
      return { ...state, mainImage: action.mainImage };
    default:
      return state;
  }
};

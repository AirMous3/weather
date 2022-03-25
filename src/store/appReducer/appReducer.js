import { APP_SET_APP_INITIALIZE } from '@/store/appReducer/constants';

const initState = {
  isInitialized: false,
};
export const appReducer = (state = initState, action = {}) => {
  switch (action.type) {
    case APP_SET_APP_INITIALIZE:
      return { ...state, isInitialized: action.initialize };
    default:
      return state;
  }
};

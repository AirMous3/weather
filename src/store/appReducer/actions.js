import { APP_SET_APP_INITIALIZE } from '@/store/appReducer/constants';

export const setAppInitialize = (initialize) => ({
  type: APP_SET_APP_INITIALIZE,
  initialize,
});

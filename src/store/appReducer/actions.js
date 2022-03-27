import { APP_SET_APP_INITIALIZE, APP_SET_MAIN_IMAGE } from '@/store/appReducer/constants';

export const setAppInitialize = (initialize) => ({
  type: APP_SET_APP_INITIALIZE,
  initialize,
});
export const setMainImage = (mainImage) => ({
  type: APP_SET_MAIN_IMAGE,
  mainImage,
});

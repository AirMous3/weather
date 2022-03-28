import { APP_SET_API, APP_SET_APP_INITIALIZE, APP_SET_MAIN_IMAGE } from './constants';

export const setAppInitialize = (initialize) => ({
  type: APP_SET_APP_INITIALIZE,
  initialize,
});
export const setMainImage = (mainImage) => ({
  type: APP_SET_MAIN_IMAGE,
  mainImage,
});
export const setApi = (api) => ({
  type: APP_SET_API,
  api,
});

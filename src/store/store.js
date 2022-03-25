import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';

import { geolocationReducer } from '@/store/geolocationReducer/geolocationReducer';
import { currentDayReducer } from '@/store/currentDayReducer/currentDayReducer';
import { upcomingDaysReducer } from '@/store/upcomingDaysReducer/upcomingDaysReducer';
import { appReducer } from '@/store/appReducer/appReducer';

const rootReducer = combineReducers({
  position: geolocationReducer,
  currentDay: currentDayReducer,
  upcomingDays: upcomingDaysReducer,
  app: appReducer,
});
export const store = createStore(rootReducer, applyMiddleware(thunk));

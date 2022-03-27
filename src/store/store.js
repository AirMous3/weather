import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';

import { currentDayReducer } from '@/store/currentDayReducer/currentDayReducer';
import { upcomingDaysReducer } from '@/store/upcomingDaysReducer/upcomingDaysReducer';
import { appReducer } from '@/store/appReducer/appReducer';

const rootReducer = combineReducers({
  currentDay: currentDayReducer,
  upcomingDays: upcomingDaysReducer,
  app: appReducer,
});
export const store = createStore(rootReducer, applyMiddleware(thunk));

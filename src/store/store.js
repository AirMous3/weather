import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';

import { geolocationReducer } from '@/store/geolocationReducer/geolocationReducer';
import { currentDayReducer } from '@/store/currentDayReducer/currentDayReducer';

const rootReducer = combineReducers({
  position: geolocationReducer,
  currentDay: currentDayReducer,
});
export const store = createStore(rootReducer, applyMiddleware(thunk));

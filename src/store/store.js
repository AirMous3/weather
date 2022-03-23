import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';

import { geolocationReducer } from '@/store/geolocationReducer/geolocationReducer';

const rootReducer = combineReducers({
  position: geolocationReducer,
});
export const store = createStore(rootReducer, applyMiddleware(thunk));

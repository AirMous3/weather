import { UPCOMING_DAYS_SET_UPCOMING_DAYS } from './constants';

const initState = [
  {
    date: null,
    temp: null,
    img: null,
  },
];

export const upcomingDaysReducer = (state = initState, action = {}) => {
  switch (action.type) {
    case UPCOMING_DAYS_SET_UPCOMING_DAYS:
      return action.upcomingDays;
    default:
      return state;
  }
};

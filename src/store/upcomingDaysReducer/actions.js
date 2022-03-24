import { UPCOMING_DAYS_SET_UPCOMING_DAYS } from './constants';

export const setUpcomingDays = (upcomingDays) => ({
  type: UPCOMING_DAYS_SET_UPCOMING_DAYS,
  upcomingDays,
});

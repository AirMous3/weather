import { UPCOMING_DAYS_SET_UPCOMING_DAYS } from '@/store/upcomingDaysReducer/constants';

export const setUpcomingDays = (upcomingDays) => ({
  type: UPCOMING_DAYS_SET_UPCOMING_DAYS,
  upcomingDays,
});

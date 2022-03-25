import moment from 'moment';

export const getFullDate = () => {
  const day = moment().format('dddd');
  const month = moment().format('MMMM Do YYYY');
  const time = moment().format('h:mm a');
  return { time, month, day };
};

export const getWeekDays = (data) => {
  const resultDays = [];
  for (let i = 1; i < data.length; i += 1) {
    if (new Date(data[i].time).getHours() === 14) {
      resultDays.push(data[i].time);
    }
  }
  return resultDays;
};

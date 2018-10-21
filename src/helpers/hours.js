const getDateHourMinutes = date => `${date.getHours()}:${('0' + date.getMinutes()).slice(-2)}`;

const formatDateFromTime = (date, hhmm) => {
  const d = new Date(date);
  const time = hhmm.split(':');
  d.setHours(time[0]);
  d.setMinutes(time[1]);
  return d;
};

export { getDateHourMinutes, formatDateFromTime };

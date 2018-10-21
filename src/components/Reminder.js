import React from 'react';

import { getDateHourMinutes } from '../helpers/hours';

const Reminder = ({ reminder, onUpdate }) => {
  return (
    <div className="reminder" style={{ background: reminder.color }} onClick={() => onUpdate()}>
      <span className="reminder__time">
        {getDateHourMinutes(reminder.startTime)} -{' '}
        {reminder.endTime && getDateHourMinutes(reminder.endTime)}
      </span>
      <span>{reminder.description}</span>
    </div>
  );
};

export default Reminder;

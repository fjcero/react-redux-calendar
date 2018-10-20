import React from 'react';

const Reminder = ({ reminder, onDelete, onUpdate }) => {
  return (
    <div className="reminder" style={{ background: reminder.color }} onClick={() => onUpdate()}>
      <span className="reminder__time">
        {reminder.startTime} - {reminder.endTime}
      </span>
      <span>{reminder.description}</span>
    </div>
  );
};

export default Reminder;

import React from 'react';

const Reminder = ({ reminder, onDelete, onUpdate }) => {
  return (
    <div className="reminder" style={{ background: reminder.color }} onClick={() => onUpdate()}>
      {reminder.description}
    </div>
  );
};

export default Reminder;

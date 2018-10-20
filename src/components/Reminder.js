import React from 'react';

const Reminder = ({ reminder, onDelete, onUpdate }) => {
  console.log({ reminder });
  return (
    <div className="reminder" style={{ background: reminder.color }} onClick={() => onUpdate()}>
      {reminder.description}
      <span
        className="reminder__delete"
        onClick={e => {
          e.preventDefault();
          onDelete(reminder);
        }}
      >
        X
      </span>
    </div>
  );
};

export default Reminder;

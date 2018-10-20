import React from 'react';

const Reminder = ({ reminder, onDelete, onUpdate }) => {
  return (
    <div className="reminder" style={{ background: reminder.color }} onClick={() => onUpdate()}>
      {reminder.description}
      <span
        className="reminder__delete"
        onClick={e => {
          e.preventDefault();
          e.stopPropagation();
          onDelete(reminder);
        }}
      >
        X
      </span>
    </div>
  );
};

export default Reminder;

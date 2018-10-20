import React from 'react';

import Reminder from './Reminder';

class CalendarMonth extends React.Component {
  render() {
    const { month, actions } = this.props;

    return (
      <div className="calendar__month">
        {month.map((week, weekIndex) => (
          <div className="calendar__row calendar__week" key={weekIndex}>
            {week.map((day, dayIndex) => (
              <div
                className="calendar__day"
                key={dayIndex}
                onClick={() =>
                  actions.createReminder({
                    weekIndex,
                    dayIndex,
                    reminder: {
                      date: day.date,
                      time: 0,
                      color: 'FF0000',
                      description: 'test',
                    },
                  })
                }
              >
                <span className="calendar__day__label">{day.date.toDateString()}</span>
                {day.reminders.length}
                {day.reminders.length > 0 &&
                  day.reminders.map(reminder => (
                    <Reminder
                      reminder={reminder}
                      key={reminder.uuid}
                      onUpdate={actions.updateReminder}
                      onDelete={actions.deleteReminder}
                    />
                  ))}
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  }
}

export default CalendarMonth;

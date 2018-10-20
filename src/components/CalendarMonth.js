import React from 'react';
import classNames from 'classnames';

import Reminder from './Reminder';

import { Reminder as ReminderEntity } from '../lib/Reminder';

class CalendarMonth extends React.Component {
  render() {
    const { month, actions } = this.props;

    return (
      <div className="calendar__month">
        {month.map((week, weekIndex) => (
          <div className="calendar__row calendar__week" key={weekIndex}>
            {week.map((day, dayIndex) => (
              <div
                className={classNames('calendar__day', {
                  calendar__day__sibling: day.siblingMonth !== 0,
                })}
                key={dayIndex}
                onClick={() =>
                  actions.createReminder({
                    weekIndex,
                    dayIndex,
                    reminder: new ReminderEntity({
                      date: day.date,
                      time: 0,
                      color: 'FF0000',
                      description: 'LALALALA',
                    }),
                  })
                }
              >
                <span className="calendar__day__label">{day.date.getDate()}</span>
                {day.reminders.length > 0 &&
                  day.reminders.map(reminder => (
                    <Reminder
                      key={reminder.uuid}
                      reminder={reminder}
                      onUpdate={() =>
                        actions.updateReminder({
                          weekIndex,
                          dayIndex,
                          reminder,
                        })
                      }
                      onDelete={() =>
                        actions.deleteReminder({
                          weekIndex,
                          dayIndex,
                          reminder,
                        })
                      }
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

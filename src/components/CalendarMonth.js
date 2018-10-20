import React from 'react';

class CalendarMonth extends React.Component {
  state = {};

  render() {
    const { month, actions } = this.props;
    return (
      <div className="calendar__month">
        {month.map((week, i) => (
          <div className="calendar__row calendar__week" key={i}>
            {week.map((day, j) => (
              <div className="calendar__day" key={j}>
                <div onClick={() => actions.createReminder(day)}>{day.toDateString()}</div>
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  }
}

export default CalendarMonth;

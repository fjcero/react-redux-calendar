import React from 'react';

import CalendarMonth from './CalendarMonth';

// const CalendarWeek = ({  }) => (
//   <div>
//   </div>
// );

// const CalendarDay = ({ day }) => (
//   <div>
//   </div>
// );

const Calendar = ({ month, actions, ...rest }) => {
  return (
    <div className="calendar">
      <div className="calendar__row calendar__header">
        <div>Sun</div>
        <div>Mon</div>
        <div>Tue</div>
        <div>Wed</div>
        <div>Thu</div>
        <div>Fri</div>
        <div>Sat</div>
      </div>
      <CalendarMonth month={month.weeks} actions={actions} {...rest} />
      <div className="calendar__footer">
        <div onClick={() => actions.prevMonth()}>Prev</div>
        <div onClick={() => actions.nextMonth()}>Next</div>
        <div>Current Month: {month.id}</div>
      </div>
    </div>
  );
};

export default Calendar;

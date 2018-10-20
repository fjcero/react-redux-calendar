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
      <CalendarMonth month={month} actions={actions} {...rest} />
    </div>
  );
};

export default Calendar;

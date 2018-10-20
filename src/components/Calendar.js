import React from 'react';

import { getMonth } from '../helpers';

const month = getMonth();

const CalendarMonth = ({ month }) => (
  <div className="calendar__month">
    {month.map((week, i) => (
      <div className="calendar__row calendar__week" key={i}>
        {week.map((day, j) => (
          <div className="calendar__day" key={j}>
            {day.toDateString()}
          </div>
        ))}
      </div>
    ))}
  </div>
);

// const CalendarWeek = ({  }) => (
//   <div>
//   </div>
// );

// const CalendarDay = ({ day }) => (
//   <div>
//   </div>
// );

const Calendar = () => (
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
    <CalendarMonth month={month} />
  </div>
);

export default Calendar;

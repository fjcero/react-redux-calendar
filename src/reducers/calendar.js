import * as types from '../constants/action-types';
import { getMonth } from '../helpers';
import { Reminder } from '../lib/Reminder';

const defaultState = {
  month: getMonth(null, {
    formatDate: (currentDate, metadata) => {
      return {
        date: currentDate,
        ...metadata,
        reminders: [],
      };
    },
  }),
};

const calendar = (state = defaultState, action) => {
  switch (action.type) {
    case types.CALENDAR_NAV_PREV_MONTH: {
      return state;
    }
    case types.CALENDAR_NAV_NEXT_MONTH: {
      return state;
    }
    case types.CALENDAR_CREATE_REMINDER: {
      const { payload } = action;

      state.month[payload.i][payload.j].reminders.push(
        new Reminder({
          date: payload.day.date,
          time: 0,
          color: 'FF0000',
          description: 'test',
        })
      );

      return state;
    }
    case types.CALENDAR_UPDATE_REMINDER: {
      return state;
    }
    case types.CALENDAR_DELETE_REMINDER: {
      return state;
    }
    default:
      return state;
  }
};

export default calendar;

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

      state.month[payload.weekIndex][payload.dayIndex].reminders.push(
        new Reminder(payload.reminder)
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

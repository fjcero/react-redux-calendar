import * as types from '../constants/action-types';
import { getMonth } from '../helpers';

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

      let updatedMonth = state.month.slice();
      updatedMonth[payload.weekIndex][payload.dayIndex].reminders.push(payload.reminder);
      updatedMonth = updatedMonth.sort((a, b) => new Date(b.date) - new Date(a.date));

      return { ...state, month: updatedMonth };
    }
    case types.CALENDAR_UPDATE_REMINDER: {
      const { payload } = action;

      let updatedMonth = state.month.slice();
      updatedMonth[payload.weekIndex][payload.dayIndex].reminders.map(
        reminder => (reminder.uuid === payload.reminder.uuid ? payload.reminder : reminder)
      );
      updatedMonth = updatedMonth.sort((a, b) => new Date(b.date) - new Date(a.date));

      return { ...state, month: updatedMonth };
    }
    case types.CALENDAR_DELETE_REMINDER: {
      const { payload } = action;

      const updatedMonth = state.month.slice();
      updatedMonth[payload.weekIndex][payload.dayIndex].reminders = updatedMonth[payload.weekIndex][
        payload.dayIndex
      ].reminders.filter(reminder => reminder.uuid !== payload.reminder.uuid);

      return { ...state, month: updatedMonth };
    }
    default:
      return state;
  }
};

export default calendar;

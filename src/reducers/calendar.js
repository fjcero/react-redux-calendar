import * as types from '../constants/action-types';

const calendar = (state = {}, action) => {
  switch (action.type) {
    case types.CALENDAR_NAV_PREV_MONTH: {
      return;
    }
    case types.CALENDAR_NAV_NEXT_MONTH: {
      return;
    }
    case types.CALENDAR_CREATE_REMINDER: {
      return;
    }
    case types.CALENDAR_UPDATE_REMINDER: {
      return;
    }
    case types.CALENDAR_DELETE_REMINDER: {
      return;
    }
    default:
      return state;
  }
};

export default calendar;

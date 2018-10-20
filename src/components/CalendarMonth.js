import React from 'react';
import classNames from 'classnames';

import Reminder from './Reminder';
import ReminderForm from './ReminderForm';
import Modal from 'react-responsive-modal';

class CalendarMonth extends React.Component {
  state = {
    showForm: false,
    reminder: null,
    weekIndex: null,
    dayIndex: null,
  };

  onOpenModal = (e, payload = {}) => {
    this.setState({
      showForm: true,
      ...payload,
    });
  };

  onCloseModal = () => {
    this.setState({
      showForm: false,
      reminder: null,
      weekIndex: null,
      dayIndex: null,
    });
  };

  render() {
    const { month, actions } = this.props;
    const { showForm, weekIndex, dayIndex, reminder } = this.state;

    return (
      <div className="calendar__month">
        {month.map((week, weekIndex) => (
          <div className="calendar__row calendar__week" key={weekIndex}>
            {week.map((day, dayIndex) => (
              <React.Fragment key={dayIndex}>
                <div
                  className={classNames('calendar__day', {
                    calendar__day__sibling: day.siblingMonth !== 0,
                  })}
                  onClick={() => this.onOpenModal(null, { weekIndex, dayIndex })}
                >
                  <span className="calendar__day__label">{day.date.getDate()}</span>
                  {day.reminders.length > 0 &&
                    day.reminders.map(reminder => (
                      <Reminder
                        key={reminder.uuid}
                        reminder={reminder}
                        onUpdate={() => this.onOpenModal(null, { weekIndex, dayIndex, reminder })}
                      />
                    ))}
                </div>
              </React.Fragment>
            ))}
          </div>
        ))}
        <Modal open={showForm} onClose={this.onCloseModal}>
          <ReminderForm
            reminder={reminder}
            weekIndex={weekIndex}
            dayIndex={dayIndex}
            onCreate={actions.createReminder}
            onUpdate={actions.updateReminder}
            onDelete={actions.deleteReminder}
            onComplete={this.onCloseModal}
          />
        </Modal>
      </div>
    );
  }
}

export default CalendarMonth;

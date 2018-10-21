import React from 'react';
import { TwitterPicker } from 'react-color';
import { Reminder } from '../lib/Reminder';

class ReminderForm extends React.Component {
  constructor(props) {
    super(props);

    const date = new Date();

    this.state = {
      description: (props.reminder && props.reminder.description) || '',
      color: (props.reminder && props.reminder.color) || '#86EEA8',
      startTime:
        (props.reminder && props.reminder.startTime) ||
        `${date.getHours()}:${('0' + date.getMinutes()).slice(-2)}`,
      endTime: (props.reminder && props.reminder.endTime) || undefined,
    };
  }

  // getHour = () => {}

  // formatDate = () => {
  //   // const time = e.target.value.split(':');
  //   // console.log({ a: this.props.date });
  // }

  handleSubmit = e => {
    e.preventDefault();
    const { weekIndex, dayIndex, reminder } = this.props;

    if (reminder) {
      const updatedReminder = Object.assign(reminder, this.state);
      this.props.onUpdate({
        weekIndex,
        dayIndex,
        reminder: updatedReminder,
      });
    } else {
      this.props.onCreate({
        weekIndex,
        dayIndex,
        reminder: new Reminder({
          ...this.state,
        }),
      });
    }
    this.props.onComplete();
  };

  handleDescriptionChange = e => {
    this.setState({ description: e.target.value });
  };

  handleColorChange = color => {
    this.setState({ color });
  };

  handleStartTimeChange = e => {
    this.setState({
      startTime: e.target.value,
      startTimeDate: null,
    });
  };

  handleEndTimeChange = e => {
    this.setState({
      endTime: e.target.value,
      endTimeDate: null,
    });
  };

  render() {
    return (
      <form className="reminder__form" onSubmit={this.handleSubmit}>
        <input
          type="text"
          maxLength={30}
          autoFocus={true}
          placeholder="New reminder"
          value={this.state.description}
          required={true}
          onChange={this.handleDescriptionChange}
        />
        <TwitterPicker color={this.state.color} onChangeComplete={this.handleColorChange} />
        <input type="time" value={this.state.startTime} onChange={this.handleStartTimeChange} />
        <input type="time" value={this.state.endTime} onChange={this.handleEndTimeChange} />
        <br />
        <br />
        <button type="submit">{this.props.reminder ? 'Update' : 'Create'}</button>
        {this.props.reminder && (
          <span
            onClick={e => {
              e.preventDefault();
              if (window.confirm('You want to delete this reminder?')) {
                this.props.onDelete({
                  weekIndex: this.props.weekIndex,
                  dayIndex: this.props.dayIndex,
                  reminder: this.props.reminder,
                });
                this.props.onComplete();
              }
            }}
            style={{ color: 'red', float: 'right' }}
          >
            Delete
          </span>
        )}
      </form>
    );
  }
}

export default ReminderForm;

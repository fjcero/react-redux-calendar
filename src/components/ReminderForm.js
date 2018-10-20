import React from 'react';
import { TwitterPicker } from 'react-color';
import { Reminder } from '../lib/Reminder';

class ReminderForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      description: (props.reminder && props.reminder.description) || '',
      color: (props.reminder && props.reminder.color) || '#86EEA8',
      startTime: (props.reminder && props.reminder.startTime) || new Date(),
      endTime: (props.reminder && props.reminder.endTime) || undefined,
    };
  }

  handleSubmit = e => {
    e.preventDefault();

    if (this.props.reminder) {
      const updatedReminder = Object.assign(this.props.reminder, this.state);
      this.props.onUpdate(updatedReminder);
    } else {
      this.props.onCreate(
        new Reminder({
          ...this.state,
        })
      );
    }
  };

  handleDescriptionChange = e => {
    this.setState({ description: e.target.value });
  };

  handleColorChange = color => {
    this.setState({ color });
  };

  // handleStartTimeChange = e => {
  //   let time = e.target.value.split(':');

  //   const hours = time[0];
  //   const minutes = time[1];

  //   // this.setState({
  //   //   startTime: `${parseInt(hours, 10) - 1}:${minutes}`,
  //   // });
  // };

  // handleEndTimeChange = e => {
  //   let time = e.target.value.split(':');

  //   const hours = time[0];
  //   const minutes = time[1];

  //   this.props.date.set({
  //     hour: hours,
  //     minute: minutes,
  //   });

  //   // this.setState({
  //   //   endTime: `${parseInt(hours, 10) - 1}:${minutes}`,
  //   // });
  // };

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
        {/* <input
          type="time"
          value={this.state.startTime}
          onChange={this.handleStartTimeChange}
          // required={true}
        />
        <input type="time" value={this.state.endTime} onChange={this.handleEndTimeChange} /> */}
        <button type="submit">Create</button>
        {this.props.reminder && (
          <span
            onClick={e => {
              e.preventDefault();
              this.props.onDelete(this.props.reminder);
            }}
          >
            Delete
          </span>
        )}
      </form>
    );
  }
}

export default ReminderForm;

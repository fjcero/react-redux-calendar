import React from 'react';
import { TwitterPicker } from 'react-color';

import { Reminder } from '../lib/Reminder';

class ReminderForm extends React.Component {
  constructor(props) {
    this.state = {
      description: this.props.description,
      color: this.props.color,
      startTime: this.props.startTime,
      endTime: this.props.endTime,
    };
  }

  handleSubmit = e => {
    console.log('form', e);
    // this.state.
    // const reminder = new Reminder({
    //   description:
    // });
    // this.props.onSubmit()
    //
  };

  handleColorChange = color => {
    this.setState({ color });
  };

  render() {
    return (
      <form className="reminder__form" onSubmit={this.handleSubmit}>
        <input
          type="type"
          maxLength="30"
          autoFocus="true"
          placeholder="New reminder"
          value={this.state.description}
          required={true}
        />
        <TwitterPicker color={this.state.color} onChangeComplete={this.handleColorChange} />
        <input
          type="time"
          value={this.state.startTime}
          onChange={this.handleStartTimeChange}
          required={true}
        />
        <input type="time" value={this.state.endTime} onChange={this.handleEndTimeChange} />
        <button type="submit">Create</button>
      </form>
    );
  }
}

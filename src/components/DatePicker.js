import React from 'react';
import Calendar from 'react-calendar';

class DatePicker extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(date) {
    this.props.setDate(date);
  }
  render() {
    return (
      <div className="react-calendar-wrapper">
        <Calendar locale="en-EN" onChange={this.handleChange} />
      </div>
    );
  }
} 

export default DatePicker;
import React from "react";
import Calendar from "react-calendar";
import PropTypes from "prop-types";

class DatePicker extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(date) {
    this.props.setDate(date);
  }
  render() {
    const tomorrow = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
    return (
      <div className="react-calendar-wrapper">
        <Calendar locale="en-EN" onChange={this.handleChange} minDate={tomorrow} />
      </div>
    );
  }
} 

DatePicker.propTypes = {
  setDate: PropTypes.func.isRequired
}

export default DatePicker;
import React from "react";
import DatePicker from "./DatePicker";
import Loading from "./Loading";
import postEvent from "../utils/api";
import shortid from "shortid";

import { connect } from "react-redux";
import { addMessage, updateField, resetFields } from "../actions/actionCreators";

export class EventForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      calendarVisible: false,
      loading: false
    }
    this.showCalendar = this.showCalendar.bind(this);
    this.hideCalendar = this.hideCalendar.bind(this);
    this.setDate = this.setDate.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearForm = this.clearForm.bind(this);
  }
  showCalendar() {
    this.setState(() => {
      return {
        calendarVisible: true
      }
    });
  }
  hideCalendar() {
    this.setState(() => {
      return {
        calendarVisible: false
      }
    });
  }
  clearForm() {
    this.setState(() => {
      return {
        loading: false
      };
    })
    this.props.resetFields();
  }
  setDate(date) {
    const timestamp = date.getTime();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const eventDate = {
      timestamp,
      year,
      month,
      day
    }
    this.props.updateField("eventDate", eventDate);
    this.setState(() => {
      return {
        calendarVisible: false
      }
    });
  }
  handleChange(e) {
    const { name, value } = e.target;
    this.props.updateField(name, value);
  }
  handleSubmit(e) {
    const { firstName, lastName, email } = this.props.fields;
    const eventDate = this.props.fields.eventDate.timestamp;
    const data = { firstName, lastName, email, eventDate };
    this.setState(() => {
      return {
        loading: true
      }
    });
    postEvent('/events', data)
      .then(res => {
        res.messages.forEach(message => this.props.addMessage({ ...message, id: shortid.generate() }));
        this.clearForm();
      }) 
      .catch(error => console.error(error));
    e.preventDefault();
  }
  render() {
    const { firstName, lastName, email } = this.props.fields;
    const { day, month, year } = this.props.fields.eventDate;
    const eventDate = day ? `${day}/${month}/${year}` : "";
    return (
      <form className="event-form" onSubmit={this.handleSubmit}>
        <h3>Event application form</h3>
        <label htmlFor="firstName">First Name:</label>
        <input type="text" name="firstName" required placeholder="John" onChange={this.handleChange}  value={firstName}/>
        <label htmlFor="lastName">Last Name:</label>
        <input type="text" name="lastName" required placeholder="Doe" onChange={this.handleChange} value={lastName}/>
        <label htmlFor="email">Email Address:</label>
        <input type="email" name="email" required placeholder="johndoe@example.com" onChange={this.handleChange} value={email}/>
        <label htmlFor="date">Event's date:</label>
        {this.state.calendarVisible 
          ? <DatePicker setDate={this.setDate} hideCalendar={this.hideCalendar} /> 
          : ""}
        <input type="text" name="eventDate" required 
          placeholder="DD/MM/YYYY" 
          value={eventDate}
          onFocus={this.showCalendar} />
        {this.state.loading 
          ? <Loading /> 
          : <button className="event-button" type="submit">Submit</button>}
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    fields: state.fields
  }
}

export default connect(mapStateToProps, { addMessage, updateField, resetFields })(EventForm);
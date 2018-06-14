import React from 'react';
import DatePicker from './DatePicker';
import Loading from './Loading';

class EventForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      calendarVisible: false,
      loading: false,
      firstName: "",
      lastName: "",
      email: "",
      eventDate: {
        timestamp: null,
        year: null,
        month: null,
        day: null
      }
    }
    this.showCalendar = this.showCalendar.bind(this);
    this.hideCalendar = this.hideCalendar.bind(this);
    this.setDate = this.setDate.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
  setDate(date) {
    const timestamp = date.getTime();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    this.setState(() => {
      return {
        calendarVisible: false,
        eventDate: {
          timestamp,
          year,
          month,
          day
        }
      }
    });
    console.log(this.state);
  }
  handleChange(e) {
    const { name, value } = e.target;
    this.setState(() => {
      return {
        [name]: value
      }
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    this.setState(() => {
      return {
        loading: true
      }
    })
  }
  render() {
    const { day, month, year } = this.state.eventDate;
    const eventDate = day ? `${day}/${month}/${year}` : "";
    return (
      <form className="event-form" onSubmit={this.handleSubmit}>
        <h3>Event application form</h3>
        <label htmlFor="firstName">First Name:</label>
        <input type="text" name="firstName" required placeholder="John" onChange={this.handleChange} />
        <label htmlFor="lastName">Last Name:</label>
        <input type="text" name="lastName" required placeholder="Doe" onChange={this.handleChange}/>
        <label htmlFor="email">Email Address:</label>
        <input type="email" name="email" required placeholder="johndoe@example.com" onChange={this.handleChange}/>
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

export default EventForm;
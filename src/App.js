import React, { Component } from 'react';
import EventForm from './components/EventForm';
import FlashMessages from './components/FlashMessages';
import update from 'immutability-helper';

class App extends Component {
  constructor() {
    super();
    this.state = {
      messages: []
    }
    this.addMessage = this.addMessage.bind(this);
    this.removeMessage = this.removeMessage.bind(this);
  }
  addMessage(message) {
    this.setState((prevState) => {
      return {
        messages: [...prevState.messages, message]
      }
    });
  }
  removeMessage(message) {
    const index = this.state.messages.indexOf(message);
    this.setState((prevState) => {
      return {
        messages: update(prevState.messages, { $splice: [[index, 1]]})
      }
    });
  }
  render() {
    return (
      <div className='app'>
        <FlashMessages messages={this.state.messages} removeMessage={this.removeMessage} />
        <EventForm addFlashMessage={this.addMessage} />
      </div>
    );
  }
}

export default App;

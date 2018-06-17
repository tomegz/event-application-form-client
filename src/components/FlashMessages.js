import React from 'react';
import Alert from './Alert';

class FlashMessages extends React.Component {
  render() {
    return (
      <div>
        {this.props.messages.map((message, i) => {
          return (
            <Alert 
              key={message.id} 
              message={message} 
              onClose={() => this.props.removeMessage(message)} 
            />
          );
        })}
      </div>
    );
  }
}

export default FlashMessages;
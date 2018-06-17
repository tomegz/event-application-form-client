import React from "react";
import Alert from "./Alert";
import { connect } from "react-redux";
import { removeMessage } from "../actions/actionCreators";

class FlashMessages extends React.Component {
  render() {
    return (
      <div>
        {this.props.messages.map((message, i) => {
          return (
            <Alert 
              key={message.id} 
              message={message} 
              onClose={() => this.props.removeMessage(message.id)} 
            />
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    messages: state.messages
  }
}

export default connect(mapStateToProps, { removeMessage })(FlashMessages);
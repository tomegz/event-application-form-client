import React from "react";
import Alert from "./Alert";
import { connect } from "react-redux";
import { removeMessage } from "../actions/actionCreators";
import PropTypes from "prop-types";

export class FlashMessages extends React.Component {
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

FlashMessages.propTypes = {
  removeMessage: PropTypes.func.isRequired,
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired
    })
  ).isRequired
};

const mapStateToProps = state => {
  return {
    messages: state.messages
  }
}

export default connect(mapStateToProps, { removeMessage })(FlashMessages);
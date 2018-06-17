import React from "react";
import PropTypes from "prop-types";

class Alert extends React.Component {
  componentDidMount() {
    this.timer = setTimeout(
      this.props.onClose,
      this.props.timeout
    );
  }
  componentWillUnmount() {
    clearTimeout(this.timer);
  }
  render() {
    return (
      <div className={`alert alert-${this.props.message.type}`}>
        {this.props.message.text}
        <button 
          className={`btn-close alert-${this.props.message.type}`}
          onClick={this.props.onClose}
        >
          &times;
        </button>
      </div>
    );
  }
}

Alert.propTypes = {
  onClose: PropTypes.func,
  timeout: PropTypes.number,
  message: PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired
};

Alert.defaultProps = {
  timeout: 3000
};

export default Alert;
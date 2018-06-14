import React from 'react';

class Loading extends React.Component {
  render() {
    return (
      <div className="loader-wrapper">
        <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
      </div>
    );
  }
}

export default Loading;
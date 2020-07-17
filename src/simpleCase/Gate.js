import React, { Component } from 'react';

class Gate extends Component {
  render() {
    const {isOpen} = this.props;
    return <div>{isOpen?'open':'closed'}</div>;
  }
}

export default Gate;
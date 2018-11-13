import React, { Component } from "react";

class Event extends Component {
  render() {
    console.log(this.props);
    return <li>{this.props.name}</li>;
  }
}

export default Event;

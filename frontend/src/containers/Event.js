import React, { Component } from "react";

class Event extends Component {
  render() {
    console.log(this.props);
    return <li>{this.props.event}</li>;
  }
}

export default Event;

import React, { Component } from "react";

class Event extends Component {
  render() {
    return (
      <li>
        {this.props.event}
        <button onClick={this.props.deleteVacationEvent}>x</button>
      </li>
    );
  }
}

export default Event;

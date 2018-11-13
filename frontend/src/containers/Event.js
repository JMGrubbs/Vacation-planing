import React, { Component } from "react";

class Event extends Component {
  render() {
    console.log(this.props);
    return (
      <li>
        {this.props.event}
        <button onClick={this.props.deleteVacationEvent}>x</button>
      </li>
    );
  }
}

export default Event;

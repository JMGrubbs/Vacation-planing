import React, { Component } from "react";
import "../App.css";

class EventContainer extends Component {
  render() {
    return (
      <div>
        <h3>{this.props.e.name}</h3>
        <p>{this.props.e.description}</p>
        <button onClick={addToVacation}>Add to plan</button>
      </div>
    );
  }
}

export default EventContainer;

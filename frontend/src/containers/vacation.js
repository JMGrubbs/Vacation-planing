import React, { Component } from "react";

class Vacation extends Component {
  render() {
    return (
      <div>
        <h3>{this.props.vacation.name}</h3>
        <p>{this.props.vacation.sites}</p>
        <p>{this.props.vacation.events}</p>
      </div>
    );
  }
}

export default Vacation;

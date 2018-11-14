import React, { Component } from "react";

class Vacation extends Component {
  render() {
    return (
      <div>
        <h3>Vacation Location: {this.props.vacation.name}</h3>
        <p>Sites Seen: {this.props.vacation.sites}</p>
        <p>Events Participated: {this.props.vacation.events}</p>
      </div>
    );
  }
}

export default Vacation;

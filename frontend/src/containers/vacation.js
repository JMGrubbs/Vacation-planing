import React, { Component } from "react";

class Site extends Component {
  render() {
    return <li>{this.props.vacation.name}</li>;
  }
}

export default Site;

import React, { Component } from "react";

class Site extends Component {
  render() {
    console.log(this.props);
    return <li>{this.props.name}</li>;
  }
}

export default Site;

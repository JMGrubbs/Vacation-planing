import React, { Component } from "react";

class Site extends Component {
  render() {
    console.log(this.props);
    return <li>{this.props.site}</li>;
  }
}

export default Site;

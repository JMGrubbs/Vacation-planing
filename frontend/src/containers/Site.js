import React, { Component } from "react";

class Site extends Component {
  render() {
    return (
      <li>
        {this.props.site}
        <button onClick={this.props.deleteVacationSite}>x</button>
      </li>
    );
  }
}

export default Site;

import React, { Component } from "react";
import TestLocation from "./testLocation";

class ContainerLocation extends Component {
  render() {
    return (
      <div>
        <h2>Hello world from User</h2>
        <p>list all hotels</p>
        <button> book this hotel</button>
        <TestLocation
          allLocations={this.props.allLocations}
          createVacation={this.props.createVacation}
        />
      </div>
    );
  }
}
export default ContainerLocation;

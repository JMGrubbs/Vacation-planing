import React, { Component } from "react";
import Restaurant from "./restaurant";

class ContainerRestaurant extends Component {
  render() {
    return (
      <div>
        <p> all Restaurant info</p>
        <Restaurant />
      </div>
    );
  }
}
export default ContainerRestaurant;

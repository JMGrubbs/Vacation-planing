import React, { Component } from "react";
import Hotel from "./hotel";

class ContainerHotel extends Component {
  render() {
    return (
      <div>
        <h2>Hello world from User</h2>
        <p>list all hotels</p>
        <button> book this hotel</button>
        <Hotel />
      </div>
    );
  }
}
export default ContainerHotel;

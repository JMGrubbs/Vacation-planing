import React, { Component } from "react";
import Event from "./event";

class ContainerEvent extends Component {
  render() {
    return (
      <div>
        <p>name</p>
        <button>add event</button>
        <Event />
      </div>
    );
  }
}
export default ContainerEvent;

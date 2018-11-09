import React, { Component } from "react";
import User from "./user";
class ContainerUser extends Component {
  render() {
    return (
      <div>
        <h2>login</h2>
        <p>login input</p>
        <button> login button</button>
        <User />
      </div>
    );
  }
}
export default ContainerUser;

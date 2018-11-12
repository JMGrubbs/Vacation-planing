import React, { Component } from "react";
import Site from "./site";

class ContainerSite extends Component {
  render() {
    return (
      <div>
        <p>Site info</p>
        <button>book hotel</button>
        <Site />
      </div>
    );
  }
}
export default ContainerSite;

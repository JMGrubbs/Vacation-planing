import React, { Component } from "react";
import "../App.css";

class LocationContainer extends Component {
  //   toggleRender = () => {
  //     this.props.toggleRender("userPage");
  //   };
  render() {
    return (
      <div onClick={() => this.props.changeLocation(this.props.location)}>
        <p>{this.props.location.name}</p>
        <img alt="oh no, i broke" src={this.props.location.image} />
      </div>
    );
  }
}

export default LocationContainer;

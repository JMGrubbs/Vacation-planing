import React, { Component } from "react";
import "../App.css";

class LocationContainer extends Component {
  //   toggleRender = () => {
  //     this.props.toggleRender("userPage");
  //   };
  render() {
    console.log(this.props);
    return (
      <div onClick={() => this.props.changeLocation(this.props.location)}>
        {/* <button onClick={this.toggleRender}>Profile</button> */}
        <p>{this.props.location.name}</p>
        <img alt="oh no, i broke" src={this.props.location.image} />
      </div>
    );
  }
}

export default LocationContainer;

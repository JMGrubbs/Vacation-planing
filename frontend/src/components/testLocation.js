import React, { Component } from "react";

class TestLocation extends Component {
  createVacation = event => {
    console.log(event.target);
    let name = event.target.parentElement.children[1].value;
    let id = event.target.parentElement.children[2].value;
    this.props.createVacation(name, id);
  };
  render() {
    console.log(this.props.allLocations);
    return (
      <div>
        <p>Location info</p>
        <input className="name" placeholder="name" />
        <select>
          {this.props.allLocations.map(option => (
            <option key={option.id}>{option.name}</option>
          ))}
        </select>
        <button onClick={this.createVacation}> add Location</button>
      </div>
    );
  }
}
export default TestLocation;

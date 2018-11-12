import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import ContainerUser from "./components/containerUser";
import ContainerHotel from "./components/containerHotel";
import ContainerEvent from "./components/containerEvent";
import ContainerSite from "./components/containerSite";
import ContainerRestaurant from "./components/containerRestaurant";
import ContainerLocation from "./components/testContainerLocation";

class App extends Component {
  state = {
    allLocations: []
  };

  componentDidMount() {
    fetch("http://localhost:3000/locations")
      .then(resp => resp.json())
      .then(data => this.setState({ allLocations: data }));
  }

  createVacation = (name, location) => {
    let place = this.state.allLocations.filter(option => {
      return option.name === location;
    });
    console.log(place);
    let data = {
      name: name,
      location_id: place[0].id
    };
    console.log(data);
    fetch("http://localhost:3000/vacations", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(data)
    });
  };

  render() {
    return (
      <div className="container">
        <h1>Hello world</h1>
        <ContainerLocation
          allLocations={this.state.allLocations}
          createVacation={this.createVacation}
        />
      </div>
    );
  }
}

export default App;

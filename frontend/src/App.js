import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import ContainerUser from "./components/containerUser";
import ContainerHotel from "./components/containerHotel";
import ContainerEvent from "./components/containerEvent";
import ContainerSite from "./components/containerSite";
import ContainerRestaurant from "./components/containerRestaurant";

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1>Hello world</h1>
        <ContainerUser />
        <ContainerHotel />
        <ContainerEvent />
        <ContainerSite />
        <ContainerRestaurant />
      </div>
    );
  }
}

export default App;

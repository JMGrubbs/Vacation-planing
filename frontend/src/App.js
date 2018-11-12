import React, { Component } from "react";
import LocationsPage from "./containers/LocationsPage"
import LocationPage from "./containers/LocationPage"
import "./App.css";
const URL = "http://localhost:3000"

class App extends Component {
  state = {
    render: "default",
    locations: [],
    currentLocation: {},
    events: [],
    sites: []
  }

  componentDidMount() {
    fetch(`${URL}/locations`)
    .then(resp => resp.json())
    .then(locations => this.setState({ locations }))
    
    fetch(`${URL}/events`)
    .then(resp => resp.json())
    .then(events => this.setState({ events }))

    fetch(`${URL}/sites`)
    .then(resp => resp.json())
    .then(sites => this.setState({ sites }))
  }

  toggleRender = event => {
    this.setState({ render: event.target.id })
  }

  changeLocation = location => {
    this.setState({
      currentLocation: location,
      render: "location" })
  }

  render() {
    if (this.state.render === "default") {
      return (
        <div className="container">
          <h1>Welcome to my-react-app!</h1>
          <button id="locations" onClick={this.toggleRender}>Plan Your Vacation</button>
        </div>
      );
    } else if (this.state.render === "locations") {
      return (
        <LocationsPage locations={this.state.locations} changeLocation={this.changeLocation} />
      )
    } else if (this.state.render === "location") {
      return (
        <LocationPage location={this.state.currentLocation} />
      )
    }
  }
}

  // createNewVacation = () => {
  //   const data = {}

  //   fetch(`${URL}/vacations`, {
  //     method: "PATCH",
  //     body: JSON.stringify(data),
  //     headers: {"Content-Type": "application/json"}
  //   })
  // }

export default App;

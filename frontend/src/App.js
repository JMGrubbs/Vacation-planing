import React, { Component } from "react";
import LocationsPage from "./containers/LocationsPage"
import LocationPage from "./containers/LocationPage"
import "./App.css";
import EventsAndSites from "./containers/EventsAndSitesContainer";
const URL = "http://localhost:3000"

class App extends Component {
  state = {
    render: "default",
    locations: [],
    events: [],
    sites: [],
    currentLocation: {},
    vacation: {
      location: null,
      events: "",
      sites: ""
    }
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

  toggleRender = page => {
    this.setState({ render: page })
  }

  changeLocation = location => {
    this.setState({
      currentLocation: location,
      render: "location" })
  }

  changeVacationLocation = id => {
    let vacation = this.state.vacation;
    vacation.location = id;
    this.setState({ vacation })
  }

  render() {
    if (this.state.render === "default") {
      return (
        <div className="container">
          <h1>Welcome to my-react-app!</h1>
          <button onClick={() => this.toggleRender("locations")}>Plan Your Vacation</button>
        </div>
      );
    } else if (this.state.render === "locations") {
      return (
        <LocationsPage
          locations={this.state.locations}
          changeLocation={this.changeLocation}
         />
      )
    } else if (this.state.render === "location") {
      return (
        <LocationPage
          location={this.state.currentLocation}
          changeVacationLocation={this.changeVacationLocation}
          toggleRender={this.toggleRender}
         />
      )
    } else if (this.state.render === "events-and-sites") {
      return (
        <EventsAndSites
          location={this.state.currentLocation}
          events={this.state.events}
          sites={this.state.sites} 
        />
      )
    }
  }
}

export default App;

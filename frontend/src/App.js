import React, { Component } from "react";
import LocationsPage from "./containers/LocationsPage"
import LocationPage from "./containers/LocationPage"
import EventsAndSites from "./containers/EventsAndSitesContainer";
import "./App.css";
const URL = "http://localhost:3000"

class App extends Component {
  state = {
    render: "default",
    locations: [],
    events: [],
    sites: [],
    currentLocation: {},
    vacation: {
      location_id: null,
      events: [],
      sites: []
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
    vacation.location_id = id;
    this.setState({ vacation })
  }

  changeVacationSites = site => {
    let vacation = this.state.vacation;
    vacation.sites.push(site);
    this.setState({ vacation })
  }

  changeVacationEvents = e => {
    let vacation = this.state.vacation;
    vacation.events.push(e);
    this.setState({ vacation })
  }

  saveVacation = () => {
    const data = {
      name: "Some shitty vacation",
      location_id: this.state.vacation.location_id,
      events: this.state.vacation.events.join(", "),
      sites: this.state.vacation.sites.join(", ")
    };
    console.log(data)
    fetch(`${URL}/vacations`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(data)
    })
  }

  clearVacation = () => {
    this.setState({
      vacation: {
        location_id: null,
        events: "",
        sites: ""
      }
    });
    this.toggleRender("location");
  } 

  render() {
    console.log(this.state.vacation)
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
          changeVacationSites={this.changeVacationSites}
          changeVacationEvents={this.changeVacationEvents}
          saveVacation={this.saveVacation}
          clearVacation={this.clearVacation}
          toggleRender={this.toggleRender}
        />
      )
    }
  }
}

export default App;

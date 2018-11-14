import React, { Component } from "react";
import LocationsPage from "./containers/LocationsPage";
import LocationPage from "./containers/LocationPage";
import EventsAndSites from "./containers/EventsAndSitesContainer";
import NewUser from "./containers/newUser";
import User from "./containers/userPage";
import "./App.css";
const URL = "http://localhost:3000";

class App extends Component {
  state = {
    allUserVacations: [],
    allVacations: [],
    loginUser: {
      firstname: "",
      lastname: "",
      id: null
    },
    render: "default",
    locations: [],
    events: [],
    sites: [],
    currentLocation: {},
    vacation: {
      location_name: "",
      location_id: null,
      events: [],
      sites: []
    }
  };

  componentDidMount() {
    fetch(`${URL}/locations`)
      .then(resp => resp.json())
      .then(locations => this.setState({ locations }));

    fetch(`${URL}/events`)
      .then(resp => resp.json())
      .then(events => this.setState({ events }));

    fetch(`${URL}/sites`)
      .then(resp => resp.json())
      .then(sites => this.setState({ sites }));

    fetch(`${URL}/vacations`)
      .then(resp => resp.json())
      .then(allVacations => this.setState({ allVacations }));
  }

  toggleRender = page => {
    this.setState({ render: page });
  };

  changeLocation = location => {
    this.setState({
      currentLocation: location,
      render: "location"
    });
  };

  changeVacationLocation = (id, name) => {
    let vacation = this.state.vacation;
    vacation.location_id = id;
    vacation.location_name = name;
    vacation.name = `My ${name} Vacation`;
    this.setState({ vacation });
  };

  changeVacationSites = site => {
    let vacation = this.state.vacation;
    vacation.sites.push(site);
    this.setState({ vacation });
  };

  changeVacationEvents = e => {
    let vacation = this.state.vacation;
    vacation.events.push(e);
    this.setState({ vacation });
  };

  deleteVacationSite = site => {
    let vacation = this.state.vacation;
    const index = vacation.sites.indexOf(site);
    vacation.sites.splice(index, 1);
    this.setState({ vacation });
  };

  deleteVacationEvent = e => {
    let vacation = this.state.vacation;
    const index = vacation.events.indexOf(e);
    vacation.events.splice(index, 1);
    this.setState({ vacation });
  };

  saveVacation = () => {
    const data = {
      name: `My ${this.state.vacation.location_name} Vacation`,
      user_id: this.state.loginUser.id,
      location_id: this.state.vacation.location_id,
      events: this.state.vacation.events.join(", "),
      sites: this.state.vacation.sites.join(", ")
    };
    console.log(data);
    fetch(`${URL}/vacations`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(data)
    }).then(() => {
      let temp = this.state.allVacations;
      temp.push(data);
      this.setState({
        allVacations: temp
      });
    });
  };

  loginUser = event => {
    let username = event.target.parentElement.children[2].value;
    fetch(`${URL}/users`)
      .then(resp => resp.json())
      .then(data =>
        data.forEach(user => {
          if (user.firstname === username) {
            this.setState({
              loginUser: {
                firstname: user.firstname,
                lastname: user.lastname,
                id: user.id
              },
              render: "userPage"
            });
          }
        })
      );
  };

  clearVacation = () => {
    this.setState({
      vacation: {
        location_name: "",
        location_id: null,
        events: [],
        sites: []
      }
    });
    this.toggleRender("locations");
  };
  clearSitesandEvents = () => {
    let vacation = this.state.vacation;
    vacation.events = [];
    vacation.sites = [];
    this.setState({ vacation });
  };

  newUser = () => {};

  render() {
    if (this.state.render === "default") {
      return (
        <div className="container">
          <h1>Welcome to my-react-app!</h1>
          <h3>Login</h3>
          <input className="username" placeholder="username" />
          <button onClick={this.loginUser}>Login</button>
          <br />
          <br />
          <br />
          <br />
          <br />
          <input className="newUser" placeholder="Firstname" />
          <input className="newUser" placeholder="Lastname" />
          <button onClick={this.createNewUser}>New User</button>
        </div>
      );
    } else if (this.state.render === "locations") {
      return (
        <div>
          <button onClick={() => this.toggleRender("userPage")}>Profile</button>
          <LocationsPage
            locations={this.state.locations}
            changeLocation={this.changeLocation}
          />
        </div>
      );
    } else if (this.state.render === "location") {
      return (
        <LocationPage
          location={this.state.currentLocation}
          currentVacationLocation={this.state.vacation.location_name}
          changeVacationLocation={this.changeVacationLocation}
          toggleRender={this.toggleRender}
          clearVacation={this.clearVacation}
          clearSitesandEvents={this.clearSitesandEvents}
        />
      );
    } else if (this.state.render === "events-and-sites") {
      return (
        <EventsAndSites
          location={this.state.currentLocation}
          events={this.state.events}
          sites={this.state.sites}
          vacation={this.state.vacation}
          changeVacationSites={this.changeVacationSites}
          deleteVacationSite={this.deleteVacationSite}
          changeVacationEvents={this.changeVacationEvents}
          deleteVacationEvent={this.deleteVacationEvent}
          clearVacation={this.clearVacation}
          saveVacation={this.saveVacation}
          toggleRender={this.toggleRender}
        />
      );
    } else if (this.state.render === "userPage") {
      return (
        <User
          vacation={this.state.vacation}
          toggleRender={this.toggleRender}
          user={this.state.loginUser}
          clearVacation={this.clearVacation}
          saveVacation={this.saveVacation}
          deleteVacationEvent={this.deleteVacationEvent}
          deleteVacationSite={this.deleteVacationSite}
          allVacations={this.state.allVacations}
          allUserVacations={this.state.allallUserVacations}
          loginUser={this.state.loginUser}
        />
      );
    }
  }
}

export default App;

import React, { Component } from "react";
import LocationsPage from "./containers/LocationsPage";
import LocationPage from "./containers/LocationPage";
import EventsAndSites from "./containers/EventsAndSitesContainer";
import User from "./containers/userPage";
import "./App.css";
const URL = "http://localhost:3000";

class App extends Component {
  state = {
    allUserVacations: [],
    allVacations: [],
    users: [],
    username: "",
    loginUser: {
      username: "",
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

      fetch(`${URL}/users`)
      .then(resp => resp.json())
      .then(users => this.setState({ users }));
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

  loginUser = username => {
    const user = this.state.users.filter(u => {
      return u.username === username;
    })

    this.setState({ 
      loginUser: {
        username: username,
        id: user[0].id
      },
      render: "userPage"
    });
  }

  createUser = username => {
    fetch(`${URL}/users`, {
      method: "POST",
      body: JSON.stringify({username: username}),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    })
    .then(resp => resp.json())
    .then(user => this.setState({ loginUser: 
      {
        username: user.username,
        id: user.id
      },
      render: "userPage"
    }))
  }

  handleUsernameChange = event => {
    this.setState({ username: event.target.value })
  }

  createOrLoginUser = username => {
    let usernames = this.state.users.map(user => {
      return user.username;
    })

    if (usernames.includes(username)) {
      this.loginUser(username);
    } else {
      this.createUser(username);
    }
  }

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
      const username = this.state.username;
      return (
        <div className="container">
          <h1>Welcome to my-react-app!</h1>
          <h3>Login</h3>
          <input className="username" onChange={this.handleUsernameChange} placeholder="username" />
          <button onClick={() => this.createOrLoginUser(username)}>Login</button>
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
          username={this.state.username}
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

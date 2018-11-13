import React, { Component } from "react";
import "../App.css";
import Event from "./Event";
import Site from "./Site";

class User extends Component {
  toggleRender = () => {
    this.props.toggleRender("locations");
  };

  clearVacation = () => {
    this.props.clearVacation();
  };

  render() {
    return (
      <div>
        <h1>User Profile</h1>
        <h2>{this.props.user.firstname}</h2>
        <h3>{this.props.user.lastname}</h3>
        <br />
        <br />
        <br />
        <button onClick={this.clearVacation}>Plan New Vacation</button>
        <button onClick={this.toggleRender}>Edit Vacation</button>
        <h3>New Vacation</h3>
        <h2>{this.props.vacation.location_name}</h2>
        <h3>Vacation Sites</h3>
        {this.props.vacation.sites.map(site => {
          return (
            <Site
              deleteVacationSite={this.props.deleteVacationSite}
              key={Math.floor(Math.random * 100000)}
              site={site}
            />
          );
        })}
        <h3>Vacation Events</h3>
        {this.props.vacation.events.map(event => {
          return (
            <Event
              deleteVacationEvent={this.props.deleteVacationEvent}
              key={Math.floor(Math.random * 1000000)}
              event={event}
            />
          );
        })}
        <br />
        <br />
        <br />
        <h3>Vacations</h3>
      </div>
    );
  }
}

export default User;

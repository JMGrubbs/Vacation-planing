import React, { Component } from "react";
import EventContainer from "./EventContainer";
import SiteContainer from "./SiteContainer";

class EventsAndSites extends Component {
    toggleRender = () => {
        this.props.toggleRender("userPage")
    }

    render() {
    let locationEvents = this.props.events.filter(e => {
        return e.location_id === this.props.location.id;
    });

    let locationSites = this.props.sites.filter(site => {
        return site.location_id === this.props.location.id;
    });

    return (
        <div>
            <h1>EVENTS</h1>
            {locationEvents.map(e => {
                return <EventContainer
                    key={e.id}
                    e={e}
                    vacationEvents={this.props.vacation.events}
                    changeVacationEvents={this.props.changeVacationEvents}
                    deleteVacationEvent={this.props.deleteVacationEvent}
                />
            })}
            <br />
            <br />
            <h1>TOURIST SITES</h1>
            {locationSites.map(site => {
                return <SiteContainer
                    key={site.id}
                    site={site}
                    vacationSites={this.props.vacation.sites}
                    changeVacationSites={this.props.changeVacationSites}
                    deleteVacationSite={this.props.deleteVacationSite}
                />
            })}
            <br />
            <br />
            <button onClick={this.toggleRender}>Profile</button>
            <button onClick={() => this.props.toggleRender("location")}>Go Back</button>
        </div>
    )
    }
}

export default EventsAndSites;

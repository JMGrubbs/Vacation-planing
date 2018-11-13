import React, { Component } from "react";
import EventContainer from "./EventContainer";
import SiteContainer from "./SiteContainer";

class EventsAndSites extends Component {
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
                return <EventContainer key={e.id} e={e} changeVacationEvents={this.props.changeVacationEvents}/>
            })}
            <br />
            <br />
            <h1>TOURIST SITES</h1>
            {locationSites.map(site => {
                return <SiteContainer key={site.id} site={site} changeVacationSites={this.props.changeVacationSites}/>
            })}
            <br />
            <br />
            <button onClick={this.props.saveVacation}>Save Your Vacation</button>
            <button onClick={this.props.clearVacation}>Go Back</button>
        </div>
    )
    }
}

export default EventsAndSites;

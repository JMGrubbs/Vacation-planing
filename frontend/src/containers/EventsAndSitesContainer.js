import React, { Component } from "react";
import EventContainer from "./EventContainer";
import SiteContainer from "./SiteContainer";

class EventsAndSites extends Component {
  render() {
    console.log(this.props);
    let locationEvents = this.props.events.filter(e => {
      return e.location_id === this.props.location.id;
    });

    let locationSites = this.props.sites.filter(site => {
      return site.location_id === this.props.location.id;
    });

    return (
      <div>
        {locationEvents.map(e => {
          return <EventContainer e={e} />;
        })}

        {locationSites.map(site => {
          return <SiteContainer site={site} />;
        })}
      </div>
    );
  }
}

export default EventsAndSites;

import React, { Component } from 'react'
import LocationContainer from './LocationContainer'

class LocationsPage extends Component {

    render() {
        let locations = this.props.locations;
        return (
            <div className="wrapper">
                {locations.map(location => {
                    return <LocationContainer
                        key={location.id}
                        location={location}
                        changeLocation={this.props.changeLocation}
                    />
                })}
            </div>
        )
    }
}

export default LocationsPage
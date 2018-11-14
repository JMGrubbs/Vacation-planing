import React, { Component } from 'react'
import LocationContainer from './LocationContainer'

class LocationsPage extends Component {
    state = {
        currentSearch: ""
    }

    handleSearchChange = event => {
        this.setState({ currentSearch: event.target.value})
    }

    render() {
        let locations = this.props.locations;
        const filteredLocations = locations.filter(l => {
            if (l.name.toLowerCase().includes(this.state.currentSearch)) {
                return l;
            }
        })

        return (
            <div>
                <div>
                    <input type="text" onChange={this.handleSearchChange} placeholder="Search Locations"/>
                </div>

                <div className="wrapper">
                    {filteredLocations.map(location => {
                        return <LocationContainer
                            key={location.id}
                            location={location}
                            changeLocation={this.props.changeLocation}
                        />
                    })}
                </div>
            </div>
        )
    }
}

export default LocationsPage
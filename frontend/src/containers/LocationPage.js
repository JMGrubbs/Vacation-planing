import React, { Component } from 'react'

class LocationPage extends Component {

    changeVacationLocation = () => {
        this.props.changeVacationLocation(this.props.location.id)
        this.props.toggleRender("events-and-sites")
    }

    render() {
        return(
            <div>
                <div><h1>{this.props.location.name}</h1></div>
                <img alt="oh no, i broke" src={this.props.location.image} />
                <div><p>{this.props.location.description}</p></div>
                <br />
                <button onClick={this.changeVacationLocation}>Create Your {this.props.location.name} Vacation</button>
                <button onClick={() => this.props.toggleRender("locations")}>Go Back</button>
            </div>
        )
    }
}

export default LocationPage
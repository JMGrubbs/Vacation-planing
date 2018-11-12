import React, { Component } from 'react'

class LocationPage extends Component {

    render() {
        return(
            <div>
                <div><h1>{this.props.location.name}</h1></div>
                <img alt="oh no, i broke" src={this.props.location.image} />
                <div><p>{this.props.location.description}</p></div>
            </div>
        )
    }
}

export default LocationPage
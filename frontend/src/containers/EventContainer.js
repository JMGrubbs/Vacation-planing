import React, { Component } from 'react'
import "../App.css";

class EventContainer extends Component {
    render() {
        return(
            <div>
                <h3>{e.name}</h3>
                <p>{e.description}</p>
            </div>
        )
    }
}

export default EventContainer
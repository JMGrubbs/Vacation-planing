import React, { Component } from "react";
import "../App.css";

class EventContainer extends Component {
    state = {
        clicked: false
    }
    
    render() {
        return(
            <div>
                <h3>{this.props.e.name}</h3>
                <p>{this.props.e.description}</p>
                <button onClick={() => this.props.changeVacationEvents(this.props.e.name)}>Add to your vacation</button>
            </div>
        )
    }
}

export default EventContainer;

import React, { Component } from "react";
import "../App.css";

class EventContainer extends Component {
    
    render() {
        return(
            <div>
                <h3>{this.props.e.name}</h3>
                <p className="blocktext">{this.props.e.description}</p>
                {this.props.vacationEvents.includes(this.props.e.name)
                ? <button onClick={() => this.props.deleteVacationEvent(this.props.e.name)}>Remove from your vacation</button>
                : <button onClick={() => this.props.changeVacationEvents(this.props.e.name)}>Add to your vacation</button>}
            </div>
        )
    }
}

export default EventContainer;

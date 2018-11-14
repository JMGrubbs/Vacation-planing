import React, { Component } from "react";
import "../App.css";

class SiteContainer extends Component {
    render() {
        return(
            <div>
                <h3>{this.props.site.name}</h3>
                <p className="blocktext">{this.props.site.description}</p>
                {this.props.vacationSites.includes(this.props.site.name)
                ? <button onClick={() => this.props.deleteVacationSite(this.props.site.name)}>Remove from your vacation</button>
                : <button onClick={() => this.props.changeVacationSites(this.props.site.name)}>Add to your vacation</button>}
            </div>
        )
    }
}

export default SiteContainer;

import React, { Component } from 'react'
import "../App.css";

class SiteContainer extends Component {
    render() {
        return(
            <div>
                <h3>{this.props.site.name}</h3>
                <p>{this.props.site.description}</p>
                <button onClick={() => this.props.changeVacationSites(this.props.site.name)}>Add to your vacation</button>
            </div>
        )
    }
}

export default SiteContainer
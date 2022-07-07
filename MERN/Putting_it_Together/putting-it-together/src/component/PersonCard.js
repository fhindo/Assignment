import React from "react";
import { Component } from "react";

class PersonCard extends Component {
    constructor(props) {
        super(props);
        this.state = { ageUpdate: this.props.age };
    }
    render() {
        return (
            <div>
                <h2>{this.props.firstName}, {this.props.lastName}</h2>
                <p>Age: {this.state.ageUpdate}</p>
                <p>Hair Color: {this.props.hairColor}</p>
                <button onClick={()=> this.setState ({ageUpdate: this.state.ageUpdate+1})}
                >Birthday Button for {this.props.lastName} {this.props.firstName}  </button>
            </div>
        );
    }
}

export default PersonCard
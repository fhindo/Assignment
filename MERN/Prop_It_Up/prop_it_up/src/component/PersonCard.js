import React from "react";
import { Component } from "react";

class PersonCard extends Component{
    render(){
        return (
            <div>
                <h2>{this.props.firstName}, {this.props.lastName}</h2>
                <p>Age: {this.props.age}</p>
                <p>Hair Color: {this.props.hairColor}</p>
            </div>
        );
    }
}

const doe = new PersonCard ("Doy")

export default PersonCard
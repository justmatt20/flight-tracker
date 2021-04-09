import axios from 'axios';
import { response } from 'express';
import React, {Component} from 'react';

class FlightPlan extends Component {
    constructor() {
        super();
        this.state = {
            flightNumber: '',
            startingLocation: '',
            endingLocation: '',
            souls: '',
            aircraftType: '',
        }
    }

    handleChange = (e) => { 
        this.setState({
            [e.target.placeholder.toLowerCase()]: e.target.value
        })
    }

    handleClick = () => {
        const {flightNumber, startingLocation, endingLocation, souls, aircraftType} = this.state
        axios.post('/api/flights', {flightNumber, startingLocation, endingLocation, souls, aircraftType})
        .then((response) => { this.props.FlightPlan(response.data)})
        .catch((e) => console.log(e));
    }

    render() {
        return (
            <div className="form_container">
                <input name="flightNumber" onChange={this.handleChange} placeholder="Flight Number" />
                <input name="starting" onChange={this.handleChange} placeholder="Starting Location" />
                <input name="ending" onChange={this.handleChange} placeholder="Ending Location" />
                <input name="souls" onChange={this.handleChange} placeholder="Souls on Board" />
                <input name="aircraftType" onChange={this.handleChange} placeholder="Aircraft Type" />
                <button onClick={this.handleClick}>Add Flight Plan</button>
            </div>
        )
    }
}

export default FlightPlan;
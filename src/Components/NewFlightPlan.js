import React, {Component} from 'react';
import axios from 'axios';
// import { response } from 'express';


class NewFlightPlan extends Component {
    constructor() {
        super();
        this.state = {
            flightNumber: '',
            departure: '',
            arrival: '',
            souls: '',
            aircraftType: '',
        }
    }

    handleChange = (e) => { 
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleClick = () => {
        const {flightNumber, departure, arrival, souls, aircraftType} = this.state
        axios.post('/api/flights', {flightNumber, departure, arrival, souls, aircraftType})
        // .then((response)=> {console.log(response.data)})
        .then((response) => { this.props.updateFlights(response.data)})
        .catch((e) => console.log(e));
        // this.setState({flightNumber: '', departure: '', arrival: '', souls: '', aircraftType: ''})
    }

    render() {
        return (
            <div className="form_container">
                <input className="new_flight" name="flightNumber" onChange={this.handleChange} placeholder="Flight Number" required/>
                <input className="new_flight" name="departure" onChange={this.handleChange} placeholder="Departure" required/>
                <input className="new_flight" name="arrival" onChange={this.handleChange} placeholder="Arrival" required/>
                <input className="new_flight" name="souls" onChange={this.handleChange} placeholder="Souls on Board" required/>
                <input className="new_flight" name="aircraftType" onChange={this.handleChange} placeholder="Aircraft Type" required/>
                <button className="flight_button" onClick={this.handleClick}>Create Flight Plan</button>
            </div>
        )
    }
}

export default NewFlightPlan;
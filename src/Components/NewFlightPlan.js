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

    handleClick = (e) => {
        const {flightNumber, departure, arrival, souls, aircraftType} = this.state
        axios.post('/api/flights', {flightNumber, departure, arrival, souls, aircraftType})
        // .then((response)=> {console.log(response.data)})
        .then((response) => { this.props.updateFlights(response.data)})
        .catch((err) => console.log(err));
        // this.setState({flightNumber: '', departure: '', arrival: '', souls: '', aircraftType: ''})
    }


    render() {
        return (
            <div className="form_container">
                <input className="new_flight" name="flightNumber" onChange={this.handleChange} placeholder="Flight Number" required />
                <select onChange={this.handleChange} name="departure">
                <option value="">Departure</option>
                <option value="2W6">2W6: St Mary's</option>
                <option value="FDK">FDK: Frederick</option>
                <option value="AFB">ADW: Andrew's </option>
                <option value="MTN">MTN- Martin's</option>
                <option value="OXB">OXB: Ocean City</option>
                <option value="NHK">NHK: Pax River</option>
                <option value="ESN">ESN: Easton</option>
                <option value="HGR">HGR: Hagerstown</option>
                <option value="SBY">SBY: Salisbury</option>
            </select>
            <select onChange={this.handleChange} name="arrival">
                <option value="">Arrival</option>
                <option value="2W6">2W6: St Mary's</option>
                <option value="FDK">FDK: Frederick</option>
                <option value="AFB">ADW: Andrew's </option>
                <option value="MTN">MTN- Martin's</option>
                <option value="OXB">OXB: Ocean City</option>
                <option value="NHK">NHK: Pax River</option>
                <option value="ESN">ESN: Easton</option>
                <option value="HGR">HGR: Hagerstown</option>
                <option value="SBY">SBY: Salisbury</option>
            </select>
                <input className="new_flight" name="souls" onChange={this.handleChange} placeholder="Souls on Board" required/>
                <input className="new_flight" name="aircraftType" onChange={this.handleChange} placeholder="Aircraft Type" required/>
                <button className="flight_button" onClick={this.handleClick} value=''>Start New Flight</button>
            </div>
            
        )
    }
}

export default NewFlightPlan;
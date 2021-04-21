import React, { Component } from 'react'
import axios from 'axios'




class Update extends Component {
constructor() {
    super()

    this.state = {
        flights: [],
        arrival: '',
        departure: '',
}
}

depChange = (e) => {
    this.setState({departure: e.target.value})
}

arrChange = (e) => {
    this.setState({arrival: e.target.value})
}

handleClick = (flight) => {
    this.update(flight)
};

updateLocation = (flightId) => {
    const //set variable for updated or clicked card
    axios.put('/api/flights/'+flightId) 
    .then(response => {
    if (flightId === ) {//if change is made to the arrival or departure, update in state and show under departure and arrival
        alert(`${this.flightNumber} has been successfully updated`)
        this.setState({flights: this.state.flights.filter(flight => flight.id !== flightId)})//return flights with updates
    }
    })
    .catch((e) => console.log(e))
// };



    render () {
    return(
        <div>
            <div className="location">
            <select required onChange={this.depChange} value={this.state.departure} name="departure">
                <option value="" >Departure</option>
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
            <select required onChange={this.arrChange} value={this.state.arrival} name="arrival">
                <option value="" >Arrival</option>
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

            <button className="edit_button" onClick={this.updateLocation}>Submit Changes</button> 
        </div>             
        </div>

    )
        
}

export default Update;
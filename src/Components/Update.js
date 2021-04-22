import React, { Component } from 'react'
import axios from 'axios'






class Update extends Component {
constructor() {
    super()

    this.state = {
        flights: [],
        arrival: '',
        value: '',
        airports: [
            {
            name: "Select",
            value: null
            },
            {
            name: "2W6",
            value: "2W6"
            },
            {
            name: "AFB",
            value: "AFB"
            },
            {
            name: "FDK",
            value: "FDK"
            },
            {
            name: "MTN",
            value: "MTN"
            },
            {
            name: "OXB",
            value: "OXB"
            },
            {
            name: "NHK",
            value: "NHK"
            },
            {
            name: "ESN",
            value: "ESN"
            },
            {
            name: "HGR",
            value: "HGR"
            },
            {
            name: "SBY",
            value: "SBY"
            },

        ]
    
}
}


arrChange = (e) => {
    console.log(e.target.value)
    this.setState({value: e.target.value})
}

//click update arrival -> open up drop down
//update location should be in App.js but found out too late in the game. Oops. We created a work-around, that passed a func from app.js to this component that allows us to update App.js state
updateLocation = () => {
    const {flightNumber, departure, arrival, souls, aircraftType, value} = this.state
    const { id } = this.props
    console.log(id)
    axios.put(`/api/flights/${id}`, {value}) 
    .then(response => {
        if (response.data !== -1) {
            console.log(response.data)
        alert(`Flight has been successfully updated`)
        // this.setState({flights: this.state.flights})
        this.props.updateAppState(response.data)
        }
    })
    .catch((e) => console.log(e))
    };


    render () {
        console.log(this.props)
        console.log("flights", this.state.flights)
        console.log(this.state.value)
        const {airports, value} = this.state
    return(
        <div>
            <div className="location">
                <select className="select" onChange={this.arrChange} value={value}> {airports.map(item => (
                    <option key={item.value} value={item.value}>{item.name}</option>
                ))}
                </select>
                <button className="edit_button" onClick={this.updateLocation}>Submit Changes</button> 
            </div>             
        </div>

    )
    }     
}

export default Update;
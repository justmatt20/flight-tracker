import React, { Component } from 'react';
import './reset.css';
import './App.css';
import axios from 'axios';
import NewFlightPlan from './Components/NewFlightPlan'
// import Update from './Components/Update'
// import ThreeGreen from './Components/ThreeGreen'
import Header from './Components/Header'
// import response from 'express';

class App extends Component {
  constructor() {
    super();
    this.state = {
      flights : [],
    }
  }
componentDidMount() {
axios.get('/api/flights')
.then((response) => { this.setState({ flights: response.data })
})
.catch((e) => console.log(e)); 
}

// newFlights = (flights) => {
//   this.setState({ flights })
// }

updateFlights = (flights) => {
  this.setState({ flights })
}



  render () {
    return(
      <div className="container">
        <Header />
        {this.state.flights.map((flight) => {
          return (
            <div className="body_container">
            <h2 className="h2">Flight Number: {flight.flightNumber}</h2>
            <p>Departure: <br/> {flight.departure}</p>
            <p>Arrival: <br/> {flight.arrival}</p>
            <p>Souls on Board: <br/> {flight.souls}</p>
            <p>Aircraft Type: <br/> {flight.aircraftType}</p>
            <button className="edit">Update Flight</button>
            <button className="landed">Three Green</button>
            {/* <button>Update Flight Plan</button> */}
            </div>
          )
  })}
  {/* <Update updateFlights={this.updateFlights}/> */}
  {/* <ThreeGreen updateFlights={this.updateFlights}/> */}
  <NewFlightPlan updateFlights={this.updateFlights} />
      </div>
    )
  }
}

export default App;
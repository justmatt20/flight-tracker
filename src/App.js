import React, { Component } from 'react';
import './reset.css';
import axios from 'axios';
import FlightPlan from './Components/FlightPlan'
// import response from 'express';

class App extends Component {
  constructor() {
    super();
    this.state = {
      flights : []
    }
  }
componentDidMount() {
axios.get('/api/flights')
.then((response) => { this.setState({ flights: response.data })
})
.catch((e) => console.log(e)); 
}

updateFlights = (flights) => {
  this.setState({ flights})
}

  render () {
    return(
      <div>
        {this.state.flights.map((flight) => {
          return (
          <div>
          <h3>{flight.flightNumber}</h3>
          </div>
          )
  })}

  <FlightPlan updateFlights={this.updateFlights} />
      </div>
    )
  }
}

export default App;
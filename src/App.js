import React, { Component } from 'react';
import './reset.css';
import './App.css';
import axios from 'axios';
import NewFlightPlan from './Components/NewFlightPlan'
import Header from './Components/Header'
import Update from './Components/Update'

// import flights from '../server/controllers/flights';


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

updateFlights = (flights) => {
  this.setState({ flights })
}

deleted = (flightId) => {
  axios.delete('/api/flights/'+flightId) 
  .then(response => {
    if (response.data !== null) {
      alert(`Flight has been successfully deleted`)
      this.setState({flights: this.state.flights.filter(flight => flight.id !== flightId)})
    }
  })
  .catch((e) => console.log(e))
};


openUpdate = () => {
  return <Update />
}

  render () {
    return(
      <div className="container">
        <Header />
      
        <div className="flight_card">
        {this.state.flights.map((flight) => {
          return (
            <div className="body_container">
              <img className="helo" src="/images/helo.png"></img>
              <h2 className="number">Flight Number: </h2> <h2 className="value">{flight.flightNumber}</h2>
              <p className="key">Departure: </p> <p className="value">{flight.departure}</p>
              <p className="key">Arrival: </p> <p className="value">  {flight.arrival}</p>
              <p className="key">Souls on Board: </p> <p className="value"> {flight.souls}</p>
              <p className="key">Aircraft Type: </p> <p className="value">{flight.aircraftType}</p>
              {/* <input placeholder="Departure"/>
              <input placeholder="Arrival"/> */}
              <button className="edit_button" onClick={this.openUpdate}>Update Flight</button>
              {/* <Update updateFlights={this.updateFlights}/> */}
              <button className="landed" onClick={this.deleted.bind(this, flight.id)}>Three Green </button>
              {/* <button>Update Flight Plan</button> */}
            </div>
          )
  })}
  {/* <Update updateFlights={this.updateFlights}/> */}
  </div>
    <NewFlightPlan updateFlights={this.updateFlights} />
      </div>
    )
  }
}

export default App;
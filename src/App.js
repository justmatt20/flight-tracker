import React, { Component } from 'react';
import './reset.css';
import './App.css';
import axios from 'axios';
import NewFlightPlan from './Components/NewFlightPlan'
import Header from './Components/Header'
import Update from './Components/Update'

// import flights from '../server/controllers/flights';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flights : [],
      openComponent: false,
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
      alert(`${this.flightNumber} has been successfully deleted`)
      this.setState({flights: this.state.flights.filter(flight => flight.id !== flightId)})
    }
  })
  .catch((e) => console.log(e))
};

openUpdate = (value) => {
  this.setState({
    openComponent: true,
  });

}



  render () {
    return(
      <div className="container">
        <Header />
      <div className="new">
        <NewFlightPlan updateFlights={this.updateFlights} />
      </div>
        <div className="flight_card">
        {this.state.flights.map((flight) => {
          return (
            <div className="body_container">
                  <img className="helo" src="/images/helo.png" alt="icon of a helicopter"></img>
                  <h2 className="number">Flight Number: </h2> <h2 className="value">{flight.flightNumber}</h2>
                  <p className="key">Departure: </p> <p className="value">{flight.departure}</p>
                  <p className="key">Arrival: </p> <p className="value">  {flight.arrival}</p>
                  <p className="key">Souls on Board: </p> <p className="value"> {flight.souls}</p>
                  <p className="key">Aircraft Type: </p> <p className="value">{flight.aircraftType}</p>
              
              <div className="buttons">
                <button  className="edit_button" onClick={this.openUpdate}>Update Flight</button>
                  {this.state.openComponent ? <Update /> : null}
                {/* <button className="edit_button" onClick={this.openUpdate}>Update Flight</button> */}
                <button className="landed" onClick={this.deleted.bind(this, flight.id)}>On Ground </button>
              </div>

            </div>
          )
  })}
  {/* <Update updateFlights={this.updateFlights}/> */}
  </div>
    {/* <NewFlightPlan updateFlights={this.updateFlights} /> */}
      </div>
    )
  }
}

export default App;
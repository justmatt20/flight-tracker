import React, { Component } from 'react';
import './reset.css';
import './App.css';
import axios from 'axios';
import NewFlightPlan from './Components/NewFlightPlan'
import Header from './Components/Header'
import Update from './Components/Update'
import Flights from './Components/Flights'


// import flights from '../server/controllers/flights';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flights : [],
      openComponent: false,
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
    ],
      minute: 0,
      second: 0,
    }
  }
componentDidMount() {
axios.get('/api/flights')
.then((response) => { this.setState({ flights: response.data })
})
.catch((e) => console.log(e)); 
}

time = () => {
  setInterval(() => {
    return  this.setState((state, props) => {
      return {
      second: state.second === 59 ? 0 : state.second -1,
      minute: state.minute === 59 ? state.minute +1 : state.minute }
    });
}, 1000);
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
  this.setState({openComponent: !this.state.openComponent});
}

updateAppState = (newFlights) => {
  this.setState({flights: newFlights})
}

  render () {
    console.log(this.state.flights)
    return(
      <div className="container">
        <Header />
      <div className="new">
        <NewFlightPlan updateFlights={this.updateFlights} />
      </div>
        <div className="flight_card">
        {this.state.flights.map((flight) => {
          return (
            <Flights flights={flight} openUpdate={this.openUpdate} openComponent={this.state.openComponent} deleted={this.deleted} updateAppState={this.updateAppState}/>
          )
  })}
  </div>
  
      </div>
    )
  }
}

export default App;
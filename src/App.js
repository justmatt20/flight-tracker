import React, { Component } from 'react';
import './reset.css';
import './App.css';
import axios from 'axios';
import NewFlightPlan from './Components/NewFlightPlan'
import Header from './Components/Header'
import Updated from './Components/Updated'

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

    ]
      // time: [{
      //   minute: 0,
      //   second: 0,
      // }]
    }
  }
componentDidMount() {
//   setInterval(() => {
//     return  this.setState((state, props) => {
//       return {
//       second: state.second === 59 ? 0 : state.second -1,
//       minute: state.minute === 59 ? state.minute +1 : state.minute }
//     });
// }, 1000);

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
  this.setState({openComponent: !this.state.openComponent});
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
                  <p className="key">Arrival: </p> <p className="value"> {flight.arrival}</p>
                  <p className="key">Souls on Board: </p> <p className="value"> {flight.souls}</p>
                  <p className="key">Aircraft Type: </p> <p className="value">{flight.aircraftType}</p>
                  {/* <img className="img_box" alt="url of helicopter">
                  {this.props.state ? <Updated/> : null}
                  </img> */}
                  {/* <p>Flight Time: {this.state.time} </p> */}
                  {/* <div>{props.image}</div> */}
              
              <div className="buttons">
                <button  className="edit_button" onClick={this.openUpdate}>Add Aircraft Image</button>
                  {this.state.openComponent ? <Updated /> : null}
                <button className="landed" onClick={this.deleted.bind(this, flight.id)}>On Ground </button>
              </div>

            </div>
          )
  })}
  </div>
      </div>
    )
  }
}

export default App;
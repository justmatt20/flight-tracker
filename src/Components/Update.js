// import React, { Component } from 'react'
// import axios from 'axios'






// class Update extends Component {
// constructor() {
//     super()

//     this.state = {
//         // flights: [],
//         // // flightNumber: '',
//         // // departure: '',
//         // // arrival: '',
//         // // souls: '',
//         // // aircraftType: '',
//         // // },
//         arrival: '',
//         airports: [
//             {
//             name: "Select",
//             value: null
//             },
//             {
//             name: "2W6",
//             value: "2W6"
//             },
//             {
//             name: "AFB",
//             value: "AFB"
//             },
//             {
//             name: "FDK",
//             value: "FDK"
//             },
//             {
//             name: "MTN",
//             value: "MTN"
//             },
//             {
//             name: "OXB",
//             value: "OXB"
//             },
//             {
//             name: "NHK",
//             value: "NHK"
//             },
//             {
//             name: "ESN",
//             value: "ESN"
//             },
//             {
//             name: "HGR",
//             value: "HGR"
//             },
//             {
//             name: "SBY",
//             value: "SBY"
//             },

//         ]
    
// }
// }


// arrChange = (e) => {
//     console.log(e.target.value)
//     this.setState({value: e.target.value})
// }

// //click update arrival -> open up drop down

// updateLocation = (e, id) => {
//     // var array = [...this.state.flights]
//     // var index = array.indexOf(e.target.value)
//     // const flightLength = flights.length-1
//     const {flightNumber, departure, arrival, souls, aircraftType} = this.state
//     axios.put(`/api/flights/${id}`, {flightNumber, departure, arrival, souls, aircraftType}) 
//     .then(response => {
//         if (response !== -1) {
//             this.state.arrival.splice(0, 1, this.state);
//             console.log(this.updateLocation)
//         alert(`Flight has been successfully updated`)
//         this.setState({flights: this.state})
//         }
//     })
//     .catch((e) => console.log(e))
//     };


//     // .then((response) => {
//     //     // alert(`${this.flightNumber} has been successfully deleted`)
//     //     this.setState({flights: this.state.flights})
//     //     })
//     // .catch((e) => console.log(e))
//     // };


//     render () {
//         const {airports, value} = this.state
//     return(
//         <div>
//             <div className="location">
//                 <select className="select" onChange={this.arrChange} value={value}> {airports.map(item => (
//                     <option key={item.value} value={item.value}>{item.name}</option>
//                 ))}
//                 </select>
//                 <button className="edit_button" onClick={this.updateLocation}>Submit Changes</button> 
//             </div>             
//         </div>

//     )
//     }     
// }

// export default Update;
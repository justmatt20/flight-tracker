// import React, { Component } from 'react';
// import axios from 'axios';





// class ThreeGreen extends Component {
//     constructor() {
//         super();
//         this.state = {
//             flightNumber: '',
//         }
//     }

//     handleChange = (id) => {
//         const {flightNumber} = this.state;
//         axios.delete(`/api/flights?id=${id}`)
//         .then((response) => { this.props.updateFlights(response.data)})
//         .catch()
//     }

//     // handleChange = (e) => {
//     //     this.setState({
//     //         [e.target.name]: e.target.value
//     //     })
//     //     }

//     render () {
//         return (
//             <div>
//                 {/* <input className="green" name="threeGreen" onChange={this.handleChange} placeholder="Flight Number"/> */}
//                 <button className ="landing" onClick={this.handleChange}>Three Green</button>
//             </div>
//         )
//     }
// }

// export default ThreeGreen;
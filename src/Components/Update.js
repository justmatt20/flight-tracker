
import React, {Component} from 'react';
import axios from 'axios';

class Update extends Component {
    constructor(){
        super();
        this.state = {
            departure: '',
            arrival: '',
        }
    }
    // handleClick = () => {
    //     // const {departure, arrival} = this.state
    //     axios.put('/api/flights', this.state)
    //     // .then((response) => console.log(response))
    //     .then((response) => { this.props.updateFlights(response.data)})
    //     .catch((e) => console.log(e));
    // }

    handleClick =  (id, departure, arrival) => {
        axios.put(`/api/flights?id=${id}`, {departure}, {arrival})
        .then((response) => { this.setState({ flights: response.data })
        })
        .catch((e) => console.log(e)); 
        }
    

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
        }
    


    render(){
        return(
            <div>
                <input className="update" name="departure" onChange={this.handleChange} placeholder="Departure" />
                <input className="update" name="arrival" onChange={this.handleChange} placeholder="Arrival" />
                <button className="edit_button" onClick={this.handleClick}>Edit Flight Plan</button>
            </div>
        )
    }
}

export default Update;
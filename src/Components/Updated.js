import axios from 'axios'
import React, { Component } from 'react'


class Updated extends Component {
    constructor() {
        super ()
        this.state = {
            flights: [],
            image: '',
            value: '',
        }
    }
    
handleChange = (e) => {
        console.log(e.target.value)
        this.setState({value: e.target.value})
    }

handleClick = (flightId) => {
    const { image } = this.state
    axios.put(`/api/flights/`+flightId, {image})
    .then((response) => { this.setState.flights.push({ flights: response.data })
})
    .catch((e) => console.log(e)); 
}


    
    render () {
        return (
            <div className="updated">
                <form>
                    {/* <label placeholder="image URL here"/> */}
                    <input onChange={this.handleChange} type="url" id="image" name="image"/>
                    <input onClick={this.handleClick} type="submit"/>
                </form>
            </div>
        )
    }
}

export default Updated

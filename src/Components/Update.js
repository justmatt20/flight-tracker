import React, { useState } from 'react'
import axios from 'axios'


function Update() {
const [flights, updateFlights] = useState(flights)

function updateLocation (id) {
    updateFlights(
        axios.put(`/api/flights?id=${id}`)
        .then(response=> (this.setState({flights: response.data})))
        .catch()
    )
}
    return(
        <div>
            <form>
                <fieldset>
                    <input name="arrival" placeholder="Arrival" onChange={this.inputChange}required/>
                    <input name="departure" placeholder="Departure" onChange={this.inputChange} required/>
                    </fieldset>
                    <button name="submit" onClick={updateLocation}>Submit Changes</button>
            </form>
        </div>
    )
}

export default Update;
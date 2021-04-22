import React from 'react'
import Update from './Update'

function Flights (props) {
    const {flights, openUpdate} = props
        return (
        
        <div className="body_container">
            {console.log(props.flights)}
                <img className="helo" src="/images/helo.png" alt="icon of a helicopter"></img>
                <h2 className="number">Flight Number: </h2> <h2 className="value">{flights.flightNumber}</h2>
                <p className="key">Departure: </p> <p className="value">{flights.departure}</p>
                <p className="key">Arrival: </p> <p className="value"> {flights.arrival}</p>
                <p className="key">Souls on Board: </p> <p className="value"> {flights.souls}</p>
                <p className="key">Aircraft Type: </p> <p className="value">{flights.aircraftType}</p>
            
            
            <div className="buttons">
                <button  className="edit_button" onClick={openUpdate}>Update Arrival</button>
                    {props.openComponent ? <Update  id={props.flights.id} updateAppState={props.updateAppState}/> : null}
                <button className="landed" onClick={props.deleted.bind(this, flights.id)}>On Ground </button>
            </div>
        

        </div>
    
        )}
    

    export default Flights;

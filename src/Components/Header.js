import React from 'react';
import { link } from 'react-router-dom';



function Header() {
    return (
        <div className="header">
            <h1>Helicopter Flight Tracker</h1>
            <link to="/components/NewFlightPlan">Start A new Flight Plan</link>
            {/* <img className="heli" src=""/> */}
        </div>
    )
}

export default Header;
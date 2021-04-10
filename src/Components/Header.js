import React from 'react';
import NewFlightPlan from './NewFlightPlan'


function Header() {
    return (
        <div className="header">
            <h1>Helicopter Flight Tracker</h1>
            <a href="">Create A New Flight Plan</a>
            {/* <img className="heli" src=""/> */}
        </div>
    )
}

export default Header;
import React from 'react';
import { BrowserRouter, Link } from "react-router-dom";




function Header() {
    return (
        <div className="header">
            <h1>Helicopter Flight Tracker</h1>
            {/* <img className="rescue_img"src="/images/rescuehelo.png" alt="rescue helicopter"/> */}
            <BrowserRouter className="link">
                <Link className="link" to="/components/NewFlightPlan">Start A new Flight Plan</Link>
            </BrowserRouter>
            {/* <img className="heli" src=""/> */}
        </div>
    )
}

export default Header;
import React from "react";
import './navbar.css';

function Navbar() {
    return (
        <div className=" nav-row">
            <div className=" logo-place">
                <div className=" logo">
                    RK Invitational
                </div>
            </div>
            <div className=" row-components">
                KALENDER
            </div>
            <div className=" row-components">
                KONSEPTER
            </div>
            <div className=" row-components">
                BOOKING
            </div>
            <div className=" row-components">
                INSPIRASJON
            </div>
        </div>
    )
}

export default Navbar;
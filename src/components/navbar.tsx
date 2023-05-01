import React from "react";
import { Link } from "react-router-dom";
import './navbar.css';

function Navbar() {
    return (
        <div>
            <div className=" nav-row">
                <div className=" logoMainBar-place">
                    <Link to="/" className="logoNavBar">
                        RK Invitational
                    </Link>
                </div>
                <div className=" button-row">
                    <Link to='/Eventer' className="row-components">
                        EVENTER
                    </Link>
                    <Link to='/Konsepter' className=" row-components">
                        KONSEPTER
                    </Link>
                    <div className=" row-components">
                        BOOKING
                    </div>
                    <div className=" row-components">
                        INSPIRASJON
                    </div>
                </div>
            </div>
            <div className="border">

            </div>
        </div >
    )
}

export default Navbar;
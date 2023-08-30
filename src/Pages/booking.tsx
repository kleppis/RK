import React from "react";
import Navbar from "../components/navbar.tsx";
import Bunn from "../components/bunn.tsx";
import './booking.css';



function Booking() {
    return (
        <div>
            <Navbar />
            <div className="bookingBG">
                <div className="flex-Row">
                    <div>
                        <img src="" />
                    </div>
                    <div>
                        <iframe className="strava" height='100' width='300' frameborder='0' allowtransparency='true' scrolling='no' src='https://www.strava.com/athletes/51945364/activity-summary/5636730f2acae5ad0fab82eef88c39903f472ee5'></iframe>
                    </div>
                </div>
            </div>
            <Bunn />
        </div>
    )
}


export default Booking;
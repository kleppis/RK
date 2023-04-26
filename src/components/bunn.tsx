import React from "react";
import './bunn.css';
import instalogo from "../logo/instagramlogo.png";
import stravalogo from "../logo/strava.png";



function Bunn() {
    return (
        <div className=" bunn-wrapper">
            <div className="bunn1 bunn">
                <div className="bunn1s">
                    RK Invitational
                </div>
            </div>
            <div className="bunn2">
                <div className="bunn2s">
                    Kontakt:
                </div>
                <div>
                    <a className="mail" href="mailto:post@rkinvitational.no">post@rkinvitational.no</a>
                </div>
            </div>
            <div >
                <div className="bunn3 ">
                    <div>
                        Følg:
                    </div>
                    <div className="link">
                        <a href="https://www.instagram.com/remikleppan/"><img src={instalogo} alt="instagram" className="logos" /></a>                    </div>
                    <div className="link">
                        <a href="https://www.strava.com/athletes/51945364" ><img src={stravalogo} alt="strava" className="logos" /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Bunn;
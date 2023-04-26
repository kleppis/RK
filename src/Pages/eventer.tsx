import React from "react";
import Navbar from "../components/navbar.tsx";
import Bunn from "../components/bunn.tsx";
import PlaceEventBox from "../components/event-box.tsx";
import './eventer.css';



function Eventer() {
    return (
        <div>
            <Navbar />
            <div className="eventer">
                <div className="header">
                    Eventer
                </div>
            </div>
            <div className="eventBoxContainer">
                <PlaceEventBox
                    title="Marathon"
                    dato="13.Des"
                    desc="Dette er en beskrivelse av aktiviteten"
                />
                <PlaceEventBox
                    title="Marathon"
                    dato="13.Des"
                    desc="Dette er en beskrivelse av aktiviteten"
                />
                <PlaceEventBox
                    title="Marathon sjds"
                    dato="13.Des"
                    desc="Dette er en beskrivelse av aktiviteten"
                />
                <PlaceEventBox
                    title="Marathon sjds"
                    dato="13.Des"
                    desc="Dette er en beskrivelse av aktiviteten"
                />
            </div>
            <Bunn />
        </div>
    )
}

export let title, dato;

export default Eventer;
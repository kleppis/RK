import React from "react";
import './event-box.css';


function PlaceEventBox(props) {
    return (
        <EventBox
            title={props.title}
            dato={props.dato}
            desc={props.desc}
        />
    )
}


function EventBox(props) {
    return (
        <div className="boxBody">
            <div className="boxRow">
                <div className="boxTitle">
                    {props.title}
                </div>
                <div className="boxDate">
                    Dato:
                </div>
                <div className="boxDesc">
                    Beskrivelse:
                </div>
            </div>
            <div className="boxRow2">
                <div className="boxPic">
                    pic
                </div>
                <div className="boxDate2">
                    {props.dato}
                </div>
                <div className="boxDesc2">
                    {props.desc}
                </div>
            </div>
        </div>
    )
}

export default PlaceEventBox;
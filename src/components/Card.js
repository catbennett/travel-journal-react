import React from "react";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Card(props){
    return (
         <div className = "card">
            <img className = "card--img" src ={`./images/${props.img}`} />
            <div class = "card--text">
                <span className = "card--icon"><FontAwesomeIcon icon={faMapMarkerAlt} /></span>
                <span className = "card--locationText">{props.location}</span>
                <a className = "card--googleLink"href={props.googleMapsUrl}>View on Google Maps</a>
                <h2 className = "card--title">{props.title}</h2>
                <p className = "card--dates">{props.startDate} - {props.endDate}</p>
                <p className = "card--description">{props.description}</p>
            </div>
         </div>
    )
}
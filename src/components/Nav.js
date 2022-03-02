import React from 'react';
import { faGlobeAmericas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Nav() {
    return (
        <nav>
            <span className = "nav--icon"><FontAwesomeIcon icon={faGlobeAmericas} /></span>
            <h3 className = "nav--title">my travel journal.</h3>
        </nav>
    )
}
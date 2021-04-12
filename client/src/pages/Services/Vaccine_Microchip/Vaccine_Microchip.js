import React from 'react';
import logo from '../../../logo_clear192.png';
import './Vaccine_Microchip.css';

export default function Vaccine_Microchip () {
    return(
        <div className="App-header">
            <h1>Cats of Chaouen Vaccine/Microchip Page</h1>
            <img src={logo} className="App-logo" alt="logo" />
            <p>
                Welcome to Cats of Chaouen VACCINE/MICROCHIP page.
                We're delighted by your interest!
            </p>
        </div>
    )
}
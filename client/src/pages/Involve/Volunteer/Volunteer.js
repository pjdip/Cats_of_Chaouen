import React from 'react';
import logo from '../../../logo_clear192.png';
import './Volunteer.css';

export default function Volunteer () {
    return(
        <div className="App-header">
            <h1>Cats of Chaouen Volunteer Page</h1>
            <img src={logo} className="App-logo" alt="logo" />
            <p>
                Welcome to Cats of Chaouen VOLUNTEER page.
                We're delighted by your interest!
            </p>
        </div>
    )
}
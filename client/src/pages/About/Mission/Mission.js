import React from 'react';
import logo from '../../../logo_clear192.png';
import './Mission.css';

export default function Mission () {
    return(
        <div className="App-header">
            <h1>Cats of Chaouen Mission Page</h1>
            <img src={logo} className="App-logo" alt="logo" />
            <p>
                Welcome to Cats of Chaouen MISSION page.
                We're delighted by your interest!
            </p>
        </div>
    )
}
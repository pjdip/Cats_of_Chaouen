import React from 'react';
import logo from '../../../logo_clear192.png';
import './LostFound.css';

export default function LostFound () {
    return(
        <div className="App-header">
            <h1>Cats of Chaouen Lost and Found Page</h1>
            <img src={logo} className="App-logo" alt="logo" />
            <p>
                Welcome to Cats of Chaouen LOST/FOUND page.
                We're delighted by your interest!
            </p>
        </div>
    )
}
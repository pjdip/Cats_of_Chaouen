import React from 'react';
import logo from '../../../logo_clear192.png';
import './Partners.css';

export default function Partners () {
    return(
        <div className="App-header">
            <h1>Cats of Chaouen Partners Page</h1>
            <img src={logo} className="App-logo" alt="logo" />
            <p>
                Welcome to Cats of Chaouen PARTNERS page.
                We're delighted by your interest!
            </p>
        </div>
    )
}
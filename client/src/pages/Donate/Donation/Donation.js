import React from 'react';
import logo from '../../../logo_clear192.png';
import './Donation.css';

export default function Donation () {
    return(
        <div className="App-header">
            <h1>Cats of Chaouen Donation Page</h1>
            <img src={logo} className="App-logo" alt="logo" />
            <p>
                Welcome to Cats of Chaouen DONATION page.
                We're delighted by your interest!
            </p>
        </div>
    )
}
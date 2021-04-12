import React from 'react';
import logo from '../../../logo_clear192.png';
import './Spay_Neuter.css';

export default function Spay_Neuter () {
    return(
        <div className="App-header">
            <h1>Cats of Chaouen Spay/Neuter Page</h1>
            <img src={logo} className="App-logo" alt="logo" />
            <p>
                Welcome to Cats of Chaouen SPAY/NEUTER page.
                We're delighted by your interest!
            </p>
        </div>
    )
}
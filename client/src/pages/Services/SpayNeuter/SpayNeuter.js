import React from 'react';
import logo from '../../../logo_clear192.png';
import './SpayNeuter.css';

export default function SpayNeuter () {
    return(
        <div>
            <h1>Cats of Chaouen Spay/Neuter Page</h1>
            <img src={logo} className="App-logo" alt="logo" />
            <p>
                Welcome to Cats of Chaouen SPAY/NEUTER page.
                We're delighted by your interest!
            </p>
        </div>
    )
}
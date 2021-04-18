import React from 'react';
import logo from '../../../logo_clear192.png';
import './Fundraiser.css';

export default function Fundraiser () {
    return(
        <div>
            <h1>Cats of Chaouen Fundraiser Page</h1>
            <img src={logo} className="App-logo" alt="logo" />
            <p>
                Welcome to Cats of Chaouen FUNDRAISER page.
                We're delighted by your interest!
            </p>
        </div>
    )
}
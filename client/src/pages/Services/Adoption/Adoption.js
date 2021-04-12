import React from 'react';
import logo from '../../../logo_clear192.png';
import './Adoption.css';

export default function Adoption () {
    return(
        <div className="App-header">
            <h1>Cats of Chaouen Adoption Page</h1>
            <img src={logo} className="App-logo" alt="logo" />
            <p>
                Welcome to Cats of Chaouen ADOPTION page.
                We're delighted by your interest!
            </p>
        </div>
    )
}
import React from 'react';
import logo from '../../../logo_clear192.png';
import './Team.css';

export default function Team () {
    return(
        <div className="App-header">
            <h1>Cats of Chaouen Team Page</h1>
            <img src={logo} className="App-logo" alt="logo" />
            <p>
                Welcome to Cats of Chaouen TEAM page.
                We're delighted by your interest!
            </p>
        </div>
    )
}
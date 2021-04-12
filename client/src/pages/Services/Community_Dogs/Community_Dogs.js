import React from 'react';
import logo from '../../../logo_clear192.png';
import './Community_Dogs.css';

export default function Community_Dogs () {
    return(
        <div className="App-header">
            <h1>Cats of Chaouen Community Dogs Page</h1>
            <img src={logo} className="App-logo" alt="logo" />
            <p>
                Welcome to Cats of Chaouen DOGS page.
                We're delighted by your interest!
            </p>
        </div>
    )
}
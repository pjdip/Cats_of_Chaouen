import React from 'react';
import logo from '../../../logo_clear192.png';
import './Story.css';

export default function Story () {
    return(
        <div className="App-header">
            <h1>Cats of Chaouen Story Page</h1>
            <img src={logo} className="App-logo" alt="logo" />
            <p>
                Welcome to Cats of Chaouen STORY page.
                We're delighted by your interest!
            </p>
        </div>
    )
}
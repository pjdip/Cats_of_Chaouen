import React from 'react';
import logo from '../../../logo_clear192.png';
import './Social_Links.css';

export default function Social_Links () {
    return(
        <div className="App-header">
            <h1>Cats of Chaouen Social Links Page</h1>
            <img src={logo} className="App-logo" alt="logo" />
            <p>
                Welcome to Cats of Chaouen SOCIAL LINKS page.
                We're delighted by your interest!
            </p>
        </div>
    )
}
import React from 'react';
import logo from '../../../logo_clear192.png';
import './FAQ.css';

export default function FAQ () {
    return(
        <div className="App-header">
            <h1>Cats of Chaouen FAQ Page</h1>
            <img src={logo} className="App-logo" alt="logo" />
            <p>
                Welcome to Cats of Chaouen FAQ page.
                We're delighted by your interest!
            </p>
        </div>
    )
}
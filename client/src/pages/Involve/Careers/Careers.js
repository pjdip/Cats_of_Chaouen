import React from 'react';
import logo from '../../../logo_clear192.png';
import './Careers.css';

export default function Careers () {
    return(
        <div className="App-header">
            <h1>Cats of Chaouen Careers Page</h1>
            <img src={logo} className="App-logo" alt="logo" />
            <p>
                Welcome to Cats of Chaouen CAREERS page.
                We're delighted by your interest!
            </p>
        </div>
    )
}
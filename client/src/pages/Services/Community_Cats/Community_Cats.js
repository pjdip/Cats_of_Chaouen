import React from 'react';
import logo from '../../../logo_clear192.png';
import './Community_Cats.css';

export default function Community_Cats () {
    return(
        <div className="App-header">
            <h1>Cats of Chaouen Community Cats Page</h1>
            <img src={logo} className="App-logo" alt="logo" />
            <p>
                Welcome to Cats of Chaouen CATS page.
                We're delighted by your interest!
            </p>
        </div>
    )
}
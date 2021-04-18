import React from 'react';
import logo from '../../../logo_clear192.png';
import './CommunityDogs.css';

export default function CommunityDogs () {
    return(
        <div>
            <h1>Cats of Chaouen Community Dogs Page</h1>
            <img src={logo} className="App-logo" alt="logo" />
            <p>
                Welcome to Cats of Chaouen DOGS page.
                We're delighted by your interest!
            </p>
        </div>
    )
}
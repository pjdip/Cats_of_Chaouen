import React from 'react';
import logo from '../../../logo_clear192.png';
import './Adoption.css';

export default function Adoption () {
    return(
        <div>
            <h1>Cats of Chaouen Adoption Page</h1>
            <img src={logo} className="App-logo" alt="logo" />
            <p>Welcome to Cats of Chaouen FOSTER page.</p>
            <p>We do not currently have any animals available for adoption at this time</p>
        </div>
    )
}
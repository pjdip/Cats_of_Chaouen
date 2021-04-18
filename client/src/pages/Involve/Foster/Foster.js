import React from 'react';
import logo from '../../../logo_clear192.png';
import './Foster.css';

export default function Foster () {
    return(
        <div>
            <h1>Cats of Chaouen Foster Page</h1>
            <img src={logo} className="App-logo" alt="logo" />
            <p>Welcome to Cats of Chaouen FOSTER page.</p>
            <p>We do not currently have any animals in need of a foster home at this time</p>
        </div>
    )
}
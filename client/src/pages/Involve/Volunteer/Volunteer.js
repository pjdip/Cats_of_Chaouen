import React from 'react';
import logo from '../../../logo_clear192.png';
import './Volunteer.css';

export default function Volunteer () {
    return(
        <div>
            <h1>Cats of Chaouen Volunteer Page</h1>
            <img src={logo} className="App-logo" alt="logo" />
            <p>
                In order to volunteer, please contact us over email, whatsapp, social media, or our contact form
            </p>
        </div>
    )
}
import React from 'react';
import logo from '../../../logo_clear192.png';
import './Contact_Form.css';

export default function Contact_Form () {
    return(
        <div className="App-header">
            <h1>Cats of Chaouen Contact Form Page</h1>
            <img src={logo} className="App-logo" alt="logo" />
            <p>
                Welcome to Cats of Chaouen CONTACT FORM page.
                We're delighted by your interest!
            </p>
        </div>
    )
}
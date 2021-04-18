import React from 'react';
import logo from '../../../logo_clear192.png';
import './ContactForm.css';

export default function ContactForm () {
    return(
        <div>
            <h1>Cats of Chaouen Contact Form Page</h1>
            <img src={logo} className="App-logo" alt="logo" />
            <p>
                Welcome to Cats of Chaouen CONTACT FORM page.
                We're delighted by your interest!
            </p>
        </div>
    )
}
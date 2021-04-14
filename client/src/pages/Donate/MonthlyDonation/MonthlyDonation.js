import React from 'react';
import logo from '../../../logo_clear192.png';
import './MonthlyDonation.css';

export default function MonthlyDonation () {
    return(
        <div className="App-header">
            <h1>Cats of Chaouen Monthly Donation Page</h1>
            <img src={logo} className="App-logo" alt="logo" />
            <p>
                Welcome to Cats of Chaouen MONTHLY DONATION page.
                We're delighted by your interest!
            </p>
        </div>
    )
}
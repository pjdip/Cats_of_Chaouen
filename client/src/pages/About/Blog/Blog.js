import React from 'react';
import logo from '../../../logo_clear192.png';
import './Blog.css';

export default function Blog () {
    return(
        <div className="App-header">
            <h1>Cats of Chaouen Blog Page</h1>
            <img src={logo} className="App-logo" alt="logo" />
            <p>
                Welcome to Cats of Chaouen BLOG page.
                We're delighted by your interest!
            </p>
        </div>
    )
}
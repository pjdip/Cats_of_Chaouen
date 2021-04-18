import React from 'react';
import logo from '../../../logo_clear192.png';
import data from "./faq.json";
import FAQpanel from "../../../components/FAQpanel/FAQpanel";
import './FAQ.css';

export default function FAQ () {

    const faqJSX = data.FAQ.map(info => <FAQpanel
        key={info.question}
        question={info.question}
        answer={info.answer}
    />);

    return(
        <div>
            <div className="FAQpanels">
                {faqJSX}
            </div>
            <h1>Cats of Chaouen FAQ Page</h1>
            <img src={logo} className="App-logo" alt="logo" />
            <p>
                Welcome to Cats of Chaouen FAQ page.
                We're delighted by your interest!
            </p>
        </div>
    )
}
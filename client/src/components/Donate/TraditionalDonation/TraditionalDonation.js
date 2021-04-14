import React from 'react';
import './TraditionalDonation.css';

const TraditionalDonation = ({ platform, address }) => {
    return (
        <a className="TraditionalDonation" href={address} target="_blank" rel="noopener noreferrer">
            {platform}
        </a>
    )
};

export default TraditionalDonation;

/*
https://medium.com/@devfemi/how-to-add-paypal-checkout-to-your-react-app-37d44c58a896
https://www.npmjs.com/package/react-paypal-button-v2
https://www.paypal.com/us/webapps/mpp/logo-center
*/
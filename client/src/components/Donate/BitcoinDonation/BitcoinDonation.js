import React from 'react';
import { EthAddress } from 'rimble-ui';
import './BitcoinDonation.css';

const BitcoinDonation = ({ platform, address }) => {
    return (
        <div className="CryptoDonation">
            <div className="CryptoAddress">
                <p className="CryptoTitle">{platform}: </p>
                <EthAddress className="AddressClass" address={address} textLabels />
            </div>
        </div>
    )
};

export default BitcoinDonation;

/* 
https://miohtama.github.io/bitcoinaddress.js/
https://stackoverflow.com/questions/25339587/how-do-i-generate-a-qr-code-for-a-bitcoin-address-with-amount
https://codepen.io/maxcream/pen/QOoOLe
 */
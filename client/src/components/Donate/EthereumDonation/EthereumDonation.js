import React from 'react';
import { EthAddress } from 'rimble-ui';
import './EthereumDonation.css';

const EthereumDonation = ({ platform, address }) => {
    return (
        <div className="CryptoDonation">
            <div className="CryptoAddress">
                <p className="CryptoTitle">{platform}: </p>
                <EthAddress className="AddressClass" address={address} textLabels />
            </div>
        </div>
    )
};

export default EthereumDonation;
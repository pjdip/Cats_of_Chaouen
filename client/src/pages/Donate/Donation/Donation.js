import React from 'react';
import logo from '../../../logo_clear192.png';
import CryptoDonation from "../../../components/Donate/CryptoDonation/CryptoDonation";
import EthereumDonation from "../../../components/Donate/EthereumDonation/EthereumDonation";
import TraditionalDonation from "../../../components/Donate/TraditionalDonation/TraditionalDonation";
import data from "./donate.json";
import './Donation.css';

export default function Donation () {

    const traditionalDonationJSX = data.traditional.map(donation => <TraditionalDonation
        key={donation.platform}
        platform={donation.platform}
        address={donation.address}
    />);

    const cryptoDonationJSX = data.crypto.map(donation => <CryptoDonation
        key={donation.platform}
        platform={donation.platform}
        address={donation.address}
    />);

    const ethDonationJSX = data.crypto.map(donation => {
        if (donation.platform === "Ethereum") {
            return (
                <EthereumDonation
                    key={donation.platform}
                    platform={donation.platform}
                    address={donation.address}
                />
            )
        }
    });

    return(
        <div className="DonationWrapper">
            <div className="TraditionalDonationWrapper">
                <h1>Donate Fiat</h1>
                {traditionalDonationJSX}
            </div>
            <div className="CryptoDonationWrapper">
                <h1>Donate Crypto</h1>
                {cryptoDonationJSX}
                {ethDonationJSX}
            </div>
            <h1>Cats of Chaouen Donation Page</h1>
            <img src={logo} className="App-logo" alt="logo" />
            <p>
                Welcome to Cats of Chaouen DONATION page.
                We're delighted by your interest!
            </p>
        </div>
    )
}
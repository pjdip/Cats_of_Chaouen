import React from 'react';
/* import logo from '../../../logo_clear192.png'; */
import SocialLink from '../../../components/SocialLink/SocialLink';
import data from "./links.json";
import './SocialLinks.css';

export default function SocialLinks () {

    const linkJSX = data.links.map(link => <SocialLink
        key={link.platform}
        icon={link.platform}
        address={link.address}
    />);

    return(
        <div className="LinksWrapper">
            {linkJSX}
        </div>
    )
}
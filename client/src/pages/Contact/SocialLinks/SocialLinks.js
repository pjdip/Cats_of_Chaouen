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
{/*             <a href="whatsapp://send?text=AskUsAnything&phone=212615491091">WhatsApp Link</a> */}
        </div>
    )
}

/*
https://blog.toky.co/add-a-whatsapp-click-to-chat-button-to-your-website/
https://fvdm.com/code/note-whatsapp-url-scheme
https://www.codeproject.com/Questions/1189367/I-cant-open-whatsapp-api-on-javascript-link
*/
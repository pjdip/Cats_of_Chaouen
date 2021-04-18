import React from 'react';
import SocialLink from '../../../components/SocialLink/SocialLink';
import data from "./links.json";
import './FollowUs.css';

export default function FollowUs () {

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

/*
https://blog.toky.co/add-a-whatsapp-click-to-chat-button-to-your-website/
https://fvdm.com/code/note-whatsapp-url-scheme
https://www.codeproject.com/Questions/1189367/I-cant-open-whatsapp-api-on-javascript-link
*/
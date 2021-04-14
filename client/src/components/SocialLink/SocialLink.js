import React from "react";
import { Typography } from "@material-ui/core";
import { Instagram, Facebook, WhatsApp, Email, Mail } from "@material-ui/icons";
import './SocialLink.css';

const SocialLink = function ({ icon, address }) {

    const iconJSX = () => {
        if (icon === "Instagram") return <Instagram />;
        else if (icon === "Facebook") return <Facebook />;
        else if (icon === "WhatsApp") return <WhatsApp />;
        else if (icon === "Gmail") return <Email />;
        else if (icon === "Protonmail") return <Mail />;
    };

    return (
        <div className="SocialLinkWrapper">
            <a href={address} target="_blank" rel="noopener noreferrer">
                {iconJSX()}
                <Typography>
                    {address}
                </Typography>
            </a>
        </div>
    )
};

export default SocialLink;
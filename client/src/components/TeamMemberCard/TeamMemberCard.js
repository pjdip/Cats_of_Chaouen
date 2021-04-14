import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@material-ui/core";
import { LinkedIn, Facebook } from "@material-ui/icons";
import './TeamMemberCard.css';

const TeamMemberCard = function ({ image, name, bio, role, socials}) {

    const renderSocials = () => {
        if (socials.LinkedIn && socials.Facebook) {
            return (
                <div>
                    <a href={socials.LinkedIn} target="_blank" rel="noopener noreferrer">
                        <LinkedIn />
                    </a>
                    <a href={socials.Facebook} target="_blank" rel="noopener noreferrer">
                        <Facebook />
                    </a>
                </div>                
            )
        } else if (socials.LinkedIn && !socials.Facebook) {
            return (
                <a href={socials.LinkedIn} target="_blank" rel="noopener noreferrer">
                    <LinkedIn />
                </a>
            )
        } else if (socials.Facebook && !socials.LinkedIn) {
            return (
                <a href={socials.Facebook} target="_blank" rel="noopener noreferrer">
                    <Facebook />
                </a>
            )
        } else return;
    }

    return (
        <div className="teamMemberCardWrap">
            <Card className="teamCard">
                <CardMedia
                    component="img"
                    image={image}
                    title="Member Image"
                />
                <CardContent>
                    <div className="flexWrap-horizontal">
                        <div className="text-verticalAlign">
                            <Typography gutterBottom variant="h5" component="h2">
                                {name}
                            </Typography>
                            <Typography gutterBottom variant="h6" component="h2">
                                Role: {role}
                            </Typography>
                            <Typography gutterBottom component="p" className="bio">
                                {bio}
                            </Typography>
                        </div>
                    </div>

                    <div className="socialWrapper">
                        {renderSocials()}
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

export default TeamMemberCard;
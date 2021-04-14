import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardMedia, Typography } from "@material-ui/core";
import { LinkedIn, Facebook } from "@material-ui/icons";
import './TeamMemberCard.css';

const TeamMemberCard = function ({ image, name, bio, role, socials}) {

    const renderSocials = () => {
        if (socials.LinkedIn && socials.Facebook) {
            return (
                <div>
                    <Link to={socials.LinkedIn}>
                        <LinkedIn />
                    </Link>
                    <Link to={socials.Facebook}>
                        <Facebook />
                    </Link>
                </div>                
            )
        } else if (socials.LinkedIn && !socials.Facebook) {
            return (
                <Link to={socials.LinkedIn}>
                    <LinkedIn />
                </Link>
            )
        } else if (socials.Facebook && !socials.LinkedIn) {
            return (
                <Link to={socials.Facebook}>
                    <Facebook />
                </Link>
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
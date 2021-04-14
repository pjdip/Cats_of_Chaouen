import React from 'react';
/* import logo from '../../../logo_clear192.png'; */
import TeamMemberCard from "../../../components/TeamMemberCard/TeamMemberCard";
import data from './team.json';
import './Team.css';

export default function Team () {

    const teamJSX = data.team.map(member => <TeamMemberCard
        key={member.name}
        image={member.imagePath}
        name={member.name}
        bio={member.bio}
        role={member.role}
        socials={member.socials}
    />);

    return(
        <div className="TeamWrapper">
            {teamJSX}
        </div>
    )
}
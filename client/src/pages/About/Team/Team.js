import React from 'react';
import logo from '../../../logo_clear192.png';
import TeamMemberCard from "../../../components/TeamMemberCard/TeamMemberCard";
import team from './team.json';
import './Team.css';

export default function Team () {

    const teamList = [team.member1, team.member2, team.member3];
    let teamJSX = teamList.map(member => <TeamMemberCard
        image={member.imagePath}
        name={member.name}
        bio={member.bio}
        role={member.role}
        socials={member.socials}
    />);

    return(
        <div className="App-header">
            <h1>Cats of Chaouen Team Page</h1>
            <img src={logo} className="App-logo" alt="logo" />
            <p>
                Welcome to Cats of Chaouen TEAM page.
                We're delighted by your interest!
            </p>
            {teamJSX}
        </div>
    )
}
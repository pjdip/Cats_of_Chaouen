import React from "react";
import "./FAQpanel.css";
import { ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, Typography } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const FAQdropdown = ({ question, answer }) => {
    return (
        <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography className="Question">{question}</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails className="Answer">
                <Typography>{answer}</Typography>
            </ExpansionPanelDetails>
        </ExpansionPanel>
    )
};

export default FAQdropdown;

/* https://v3.material-ui.com/demos/expansion-panels/ */
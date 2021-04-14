import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, IconButton, Typography, Menu, MenuItem } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Menu as MenuIcon } from '@material-ui/icons';
import logo from "../../logo_clear64.png";
import "./Navbar.css";

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('xs')]: {
            display: 'block',
        },
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
}));

const Navbar = () => {
    const classes = useStyles();

    const [aboutAnchor, setAboutAnchor] = useState(null);
    const [contactAnchor, setContactAnchor] = useState(null);
    const [donateAnchor, setDonateAnchor] = useState(null);
    const [involveAnchor, setInvolveAnchor] = useState(null);
    const [servicesAnchor, setServicesAnchor] = useState(null);
    const [mobileAnchor, setMobileAnchor] = useState(null);

    const handleAboutOpen = event => setAboutAnchor(event.currentTarget);
    const handleContactOpen = event => setContactAnchor(event.currentTarget);
    const handleDonateOpen = event => setDonateAnchor(event.currentTarget);
    const handleInvolveOpen = event => setInvolveAnchor(event.currentTarget);
    const handleServicesOpen = event => setServicesAnchor(event.currentTarget);
    const handleMobileMenuOpen = event => setMobileAnchor(event.currentTarget);

    const handleMenuClose = () => {
        setAboutAnchor(null);
        setContactAnchor(null);
        setDonateAnchor(null);
        setInvolveAnchor(null);
        setServicesAnchor(null);
        setMobileAnchor(null);
    };

    const isAboutOpen = Boolean(aboutAnchor);
    const isContactOpen = Boolean(contactAnchor);
    const isDonateOpen = Boolean(donateAnchor);
    const isInvolveOpen = Boolean(involveAnchor);
    const isServicesOpen = Boolean(servicesAnchor);
    const isMobileMenuOpen = Boolean(mobileAnchor);

    const renderMenuItem = (path, text) => {
        return (        
            <MenuItem onClick={handleMenuClose}>
                <Link to={path} className="nav-link">
                    {text}
                </Link>
            </MenuItem>
        )
    };

    const renderMobileMenuItem = (menuOpen, text) => {
        return (
            <MenuItem onClick={menuOpen}>
                {text}
            </MenuItem>
        )
    }

    const renderMobileMenu = () => {
        return (
            <Menu
                anchorEl={mobileAnchor}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                open={isMobileMenuOpen}
                onClose={handleMenuClose}
            >
                {renderMobileMenuItem(handleAboutOpen, "About")}
                {renderMobileMenuItem(handleContactOpen, "Contact")}
                {renderMobileMenuItem(handleDonateOpen, "Donate")}
                {renderMobileMenuItem(handleInvolveOpen, "Get Involved")}
                {renderMobileMenuItem(handleServicesOpen, "Services")}
            </Menu>
        )
    };

    const renderAboutMenu = () => {
        return (
            <Menu
                className="nav-menu"
                anchorEl={aboutAnchor}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                open={isAboutOpen}
                onClose={handleMenuClose}
            >
                {renderMenuItem("/story", "Our Story")}
                {renderMenuItem("/mission", "Our Mission")}
                {renderMenuItem("/blog", "Blog")}
                {renderMenuItem("/FAQ", "FAQ")}
                {renderMenuItem("/partners", "Our Partners")}
                {renderMenuItem("/team", "Our Team")}
            </Menu>
        )
    };

    const renderContactMenu = () => {
        return (
            <Menu
                className="nav-menu"
                anchorEl={contactAnchor}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                open={isContactOpen}
                onClose={handleMenuClose}
            >
                {renderMenuItem("/contact_form", "Contact Form")}
                {renderMenuItem("/location_hours", "Location/Hours")}
                {renderMenuItem("/social", "Social")}
            </Menu>
        )
    };

    const renderDonateMenu = () => {
        return (
            <Menu
                className="nav-menu"
                anchorEl={donateAnchor}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                open={isDonateOpen}
                onClose={handleMenuClose}
            >
                {renderMenuItem("/donate", "Donate")}
                {renderMenuItem("/monthly", "Monthly Donation")}
                {renderMenuItem("/fundraiser", "Fundraiser")}
            </Menu>
        )
    };

    const renderInvolveMenu = () => {
        return (
            <Menu
                className="nav-menu"
                anchorEl={involveAnchor}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                open={isInvolveOpen}
                onClose={handleMenuClose}
            >
                {renderMenuItem("/careers", "Careers")}
                {renderMenuItem("/foster", "Foster")}
                {renderMenuItem("/volunteer", "Volunteer")}
            </Menu>
        )
    };

    const renderServicesMenu = () => {
        return (
            <Menu
                className="nav-menu"
                anchorEl={servicesAnchor}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                open={isServicesOpen}
                onClose={handleMenuClose}
            >
                {renderMenuItem("/adopt", "Adopt")}
                {renderMenuItem("/lost", "Lost/Found")}
                {renderMenuItem("/spay", "Spay/Neuter")}
                {renderMenuItem("/vax", "Vaccine/Microchip")}
                {renderMenuItem("/cats", "Community Cats")}
                {renderMenuItem("/dogs", "Community Dogs")}
            </Menu>
        )
    };

    const renderIconButton = (openCheck, openHandle, text) => {
        return (
            <IconButton
                aria-owns={openCheck ? 'material-appbar' : undefined}
                aria-haspopup="true"
                onClick={openHandle}
                color="inherit"
            >
                <p className="menu-link">{text}</p>
            </IconButton>
        )
    }

    return(
        <nav className="navbar root">
            <AppBar position="static">
                <Toolbar>
                    <img src={logo} alt="logo" className="logO" />
                    <Typography className={classes.title} variant="h6" color="inherit">
                        Cats of Chaouen
                    </Typography>
                    <div className={classes.grow} />
                    <div className={classes.sectionDesktop}>
                        {renderIconButton(isAboutOpen, handleAboutOpen, "About")}
                        {renderIconButton(isContactOpen, handleContactOpen, "Contact")}
                        {renderIconButton(isDonateOpen, handleDonateOpen, "Donate")}
                        {renderIconButton(isInvolveOpen, handleInvolveOpen, "Get Involved")}
                        {renderIconButton(isServicesOpen, handleServicesOpen, "Services")}
                    </div>
                    <div className={classes.sectionMobile}>
                        <IconButton aria-haspopup="true" onClick={handleMobileMenuOpen} color="inherit">
                            <MenuIcon />
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
            {renderAboutMenu()}
            {renderContactMenu()}
            {renderDonateMenu()}
            {renderInvolveMenu()}
            {renderServicesMenu()}
            {renderMobileMenu()}
        </nav>
    )
};

export default Navbar;

/* https://v3.material-ui.com/demos/app-bar/ */
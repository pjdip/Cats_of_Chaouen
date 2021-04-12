import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Avatar, Button, ListItemIcon, ListItemText, Menu, MenuItem } from '@material-ui/core';
import { AppBar, Toolbar, IconButton, Typography, Badge } from '@material-ui/core';
import PropTypes from 'prop-types';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Menu as MenuIcon, AccountCircle, Mail, Notifications } from '@material-ui/icons';
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
        [theme.breakpoints.up('sm')]: {
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

const styles = theme => ({
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
    [theme.breakpoints.up('sm')]: {
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
});

const Navbar = () => {
    const classes = useStyles();
    const [anchor, setAnchor] = useState(null);
    const [aboutAnchor, setAboutAnchor] = useState(null);
    const [contactAnchor, setContactAnchor] = useState(null);
    const [donateAnchor, setDonateAnchor] = useState(null);
    const [involveAnchor, setInvolveAnchor] = useState(null);
    const [servicesAnchor, setServicesAnchor] = useState(null);
    const [mobileAnchor, setMobileAnchor] = useState(null);

    const handleMenuOpen = event => setAnchor(event.currentTarget);
    const handleAboutOpen = event => setAboutAnchor(event.currentTarget);
    const handleContactOpen = event => setContactAnchor(event.currentTarget);
    const handleDonateOpen = event => setDonateAnchor(event.currentTarget);
    const handleInvolveOpen = event => setInvolveAnchor(event.currentTarget);
    const handleServicesOpen = event => setServicesAnchor(event.currentTarget);
    const handleMobileMenuOpen = event => setMobileAnchor(event.currentTarget);

    const handleMobileMenuClose = () => setMobileAnchor(null);

    const handleMenuClose = () => {
        setAboutAnchor(null);
        setContactAnchor(null);
        setDonateAnchor(null);
        setInvolveAnchor(null);
        setServicesAnchor(null);
        setMobileAnchor(null);
/*         handleMobileMenuClose(); */
    };

    const isMenuOpen = Boolean(anchor);
    const isAboutOpen = Boolean(aboutAnchor);
    const isContactOpen = Boolean(contactAnchor);
    const isDonateOpen = Boolean(donateAnchor);
    const isInvolveOpen = Boolean(involveAnchor);
    const isServicesOpen = Boolean(servicesAnchor);
    const isMobileMenuOpen = Boolean(mobileAnchor);

    const renderMobileMenu = () => {
        return (
            <Menu
                anchorEl={mobileAnchor}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                open={isMobileMenuOpen}
                onClose={handleMenuClose}
            >
                <MenuItem onClick={handleMobileMenuClose}>
                    <IconButton color="inherit">
                        <Badge badgeContent={4} color="secondary">
                            <Mail />
                        </Badge>
                    </IconButton>
                    <p>Messages</p>
                </MenuItem>
                <MenuItem onClick={handleMobileMenuClose}>
                    <IconButton color="inherit">
                        <Badge badgeContent={11} color="secondary">
                            <Notifications />
                        </Badge>
                    </IconButton>
                    <p>Notifications</p>
                </MenuItem>
                <MenuItem onClick={handleMenuOpen}>
                    <IconButton color="inherit">
                        <AccountCircle />
                    </IconButton>
                    <p>Profile</p>
                </MenuItem>
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
                <MenuItem onClick={handleMenuClose}>
                    <Link to="/story" className="nav-link">
                        Story
                    </Link>
                </MenuItem>
                <MenuItem onClick={handleMenuClose}>
                    <Link to="/mission" className="nav-link">
                        Mission
                    </Link>
                </MenuItem>
                <MenuItem onClick={handleMenuClose}>
                    <Link to="/blog" className="nav-link">
                        Blog
                    </Link>
                </MenuItem>
                <MenuItem onClick={handleMenuClose}>
                    <Link to="/FAQ" className="nav-link">
                        FAQ
                    </Link>
                </MenuItem>
                <MenuItem onClick={handleMenuClose}>
                    <Link to="/partners" className="nav-link">
                        Partners
                    </Link>
                </MenuItem>
                <MenuItem onClick={handleMenuClose}>
                    <Link to="/team" className="nav-link">
                        Team
                    </Link>
                </MenuItem>
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
                <MenuItem onClick={handleMenuClose}>
                    <Link to={"/contact_form"} className="nav-link">
                        Contact Form
                    </Link>
                </MenuItem>
                <MenuItem onClick={handleMenuClose}>
                    <Link to={"/location_hours"} className="nav-link">
                        Location/Hours
                    </Link>
                </MenuItem>
                <MenuItem onClick={handleMenuClose}>
                    <Link to={"/social"} className="nav-link">
                        Social
                    </Link>
                </MenuItem>
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
                <MenuItem onClick={handleMenuClose}>
                    <Link to={"/donate"} className="nav-link">
                        Donate
                    </Link>
                </MenuItem>
                <MenuItem onClick={handleMenuClose}>
                    <Link to={"/monthly"} className="nav-link">
                        Monthly Donation
                    </Link>
                </MenuItem>
                <MenuItem onClick={handleMenuClose}>
                    <Link to={"/fundraiser"} className="nav-link">
                        Fundraiser
                    </Link>
                </MenuItem>
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
                <MenuItem onClick={handleMenuClose}>
                    <Link to={"/careers"} className="nav-link">
                        Careers
                    </Link>
                </MenuItem>
                <MenuItem onClick={handleMenuClose}>
                    <Link to={"/foster"} className="nav-link">
                        Foster
                    </Link>
                </MenuItem>
                <MenuItem onClick={handleMenuClose}>
                    <Link to={"/volunteer"} className="nav-link">
                        Volunteer
                    </Link>
                </MenuItem>
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
                <MenuItem onClick={handleMenuClose}>
                    <Link to={"/adopt"} className="nav-link">
                        Adopt
                    </Link>
                </MenuItem>
                <MenuItem onClick={handleMenuClose}>
                    <Link to={"/lost"} className="nav-link">
                        Lost and Found
                    </Link>
                </MenuItem>
                <MenuItem onClick={handleMenuClose}>
                    <Link to={"/spay"} className="nav-link">
                        Spay and Neuter
                    </Link>
                </MenuItem>
                <MenuItem onClick={handleMenuClose}>
                    <Link to={"/vax"} className="nav-link">
                        Vaccine and Microchip
                    </Link>
                </MenuItem>
                <MenuItem onClick={handleMenuClose}>
                    <Link to={"/cats"} className="nav-link">
                        Community Cats
                    </Link>
                </MenuItem>
                <MenuItem onClick={handleMenuClose}>
                    <Link to={"/dogs"} className="nav-link">
                        Community Dogs
                    </Link>
                </MenuItem>
            </Menu>
        )
    };

    return(
        <nav className="navbar root">
            <AppBar position="static">
                <Toolbar>
                    <img src={logo} alt="logo" className="logO" />
                    <Typography className={classes.title} variant="h6" color="inherit" noWrap>
                    Cats of Chaouen
                    </Typography>
                    <div className={classes.grow} />
                    <div className={classes.sectionDesktop}>
                        <IconButton
                            aria-owns={isAboutOpen ? 'material-appbar' : undefined}
                            aria-haspopup="true"
                            onClick={handleAboutOpen}
                            color="inherit"
                        >
                            <p className="menu-link">About</p>
                        </IconButton>
                        <IconButton
                            aria-owns={isAboutOpen ? 'material-appbar' : undefined}
                            aria-haspopup="true"
                            onClick={handleContactOpen}
                            color="inherit"
                        >
                            <p className="menu-link">Contact</p>
                        </IconButton>
                        <IconButton
                            aria-owns={isAboutOpen ? 'material-appbar' : undefined}
                            aria-haspopup="true"
                            onClick={handleDonateOpen}
                            color="inherit"
                        >
                            <p className="menu-link">Donate</p>
                        </IconButton>
                        <IconButton
                            aria-owns={isAboutOpen ? 'material-appbar' : undefined}
                            aria-haspopup="true"
                            onClick={handleInvolveOpen}
                            color="inherit"
                        >
                            <p className="menu-link">Get Involved</p>
                        </IconButton>
                        <IconButton
                            aria-owns={isAboutOpen ? 'material-appbar' : undefined}
                            aria-haspopup="true"
                            onClick={handleServicesOpen}
                            color="inherit"
                        >
                            <p className="menu-link">Services</p>
                        </IconButton>
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

class Navbar1 extends React.Component {
  state = {
    anchorEl: null,
    aboutAnchor: null,
    mobileMoreAnchorEl: null,
  };

  handleProfileMenuOpen = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleAboutMenuOpen = event => {
    this.setState({ aboutAnchor: event.currentTarget });
  };

  handleMenuClose = () => {
    this.setState({ anchorEl: null });
    this.setState({ aboutAnchor: null });
    this.handleMobileMenuClose();
  };

  handleMobileMenuOpen = event => {
    this.setState({ mobileMoreAnchorEl: event.currentTarget });
  };

  handleMobileMenuClose = () => {
    this.setState({ mobileMoreAnchorEl: null });
  };

  render() {
    const { anchorEl, aboutAnchor, mobileMoreAnchorEl } = this.state;
    const { classes } = this.props;
    const isMenuOpen = Boolean(anchorEl);
    const isAboutOpen = Boolean(aboutAnchor);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const renderMenu = (
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMenuOpen}
        onClose={this.handleMenuClose}
      >
        <MenuItem onClick={this.handleMenuClose}>Profile</MenuItem>
        <MenuItem onClick={this.handleMenuClose}>My account</MenuItem>
      </Menu>
    );

    const renderAboutMenu = (
      <Menu
        anchorEl={aboutAnchor}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isAboutOpen}
        onClose={this.handleMenuClose}
      >
        <MenuItem onClick={this.handleMenuClose}>Blog</MenuItem>
        <MenuItem onClick={this.handleMenuClose}>FAQ</MenuItem>
        <MenuItem onClick={this.handleMenuClose}>Mission</MenuItem>
        <MenuItem onClick={this.handleMenuClose}>Story</MenuItem>
        <MenuItem onClick={this.handleMenuClose}>Team</MenuItem>
        <MenuItem onClick={this.handleMenuClose}>Partners</MenuItem>
      </Menu>
    );

    const renderMobileMenu = (
      <Menu
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMobileMenuOpen}
        onClose={this.handleMenuClose}
      >
        <MenuItem onClick={this.handleMobileMenuClose}>
          <IconButton color="inherit">
            <Badge badgeContent={4} color="secondary">
              <Mail />
            </Badge>
          </IconButton>
          <p>Messages</p>
        </MenuItem>
        <MenuItem onClick={this.handleMobileMenuClose}>
          <IconButton color="inherit">
            <Badge badgeContent={11} color="secondary">
              <Notifications />
            </Badge>
          </IconButton>
          <p>Notifications</p>
        </MenuItem>
        <MenuItem onClick={this.handleProfileMenuOpen}>
          <IconButton color="inherit">
            <AccountCircle />
          </IconButton>
          <p>Profile</p>
        </MenuItem>
      </Menu>
    );

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <img src={logo} alt="logo" className="logO" />
            <Typography className={classes.title} variant="h6" color="inherit" noWrap>
              Cats of Chaouen
            </Typography>
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
              <IconButton color="inherit">
                <Badge badgeContent={4} color="secondary">
                  <Mail />
                </Badge>
              </IconButton>
              <IconButton color="inherit">
                <Badge badgeContent={17} color="secondary">
                  <Notifications />
                </Badge>
              </IconButton>
              <IconButton
                aria-owns={isMenuOpen ? 'material-appbar' : undefined}
                aria-haspopup="true"
                onClick={this.handleProfileMenuOpen}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <IconButton
                aria-owns={isAboutOpen ? 'material-appbar' : undefined}
                aria-haspopup="true"
                onClick={this.handleAboutMenuOpen}
                color="inherit"
              >
                <p>About Us</p>
              </IconButton>
            </div>
            <div className={classes.sectionMobile}>
              <IconButton aria-haspopup="true" onClick={this.handleMobileMenuOpen} color="inherit">
                <MenuIcon />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        {renderMenu}
        {renderAboutMenu}
        {renderMobileMenu}
      </div>
    );
  }
}

Navbar1.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default Navbar;
/* export default withStyles(styles)(Navbar1); */
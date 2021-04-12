import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import Story from './pages/About/Story/Story';
import Mission from './pages/About/Mission/Mission';
import Blog from './pages/About/Blog/Blog';
import FAQ from './pages/About/FAQ/FAQ';
import Partners from './pages/About/Partners/Partners';
import Team from './pages/About/Team/Team';

import Contact_Form from './pages/Contact/Contact_Form/Contact_Form';
import Location_Hours from './pages/Contact/Location_Hours/Location_Hours';
import Social_Links from './pages/Contact/Social_Links/Social_Links';

import Donation from './pages/Donate/Donation/Donation';
import Fundraiser from './pages/Donate/Fundraiser/Fundraiser';
import Monthly_Donation from './pages/Donate/Monthly_Donation/Monthly_Donation';

import Careers from './pages/Involve/Careers/Careers';
import Foster from './pages/Involve/Foster/Foster';
import Volunteer from './pages/Involve/Volunteer/Volunteer';

import Adoption from './pages/Services/Adoption/Adoption';
import Community_Cats from './pages/Services/Community_Cats/Community_Cats';
import Community_Dogs from './pages/Services/Community_Dogs/Community_Dogs';
import Lost_Found from './pages/Services/Lost_Found/Lost_Found';
import Spay_Neuter from './pages/Services/Spay_Neuter/Spay_Neuter';
import Vaccine_Microchip from './pages/Services/Vaccine_Microchip/Vaccine_Microchip';

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import logo from "./logo_clear192.png";
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/story" component={Story} />
          <Route exact path="/mission" component={Mission} />
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/FAQ" component={FAQ} />
          <Route exact path="/partners" component={Partners} />
          <Route exact path="/team" component={Team} />

          <Route exact path="/contact_form" component={Contact_Form} />
          <Route exact path="/location_hours" component={Location_Hours} />
          <Route exact path="/social" component={Social_Links} />
  
          <Route exact path="/donate" component={Donation} />
          <Route exact path="/fundraiser" component={Fundraiser} />
          <Route exact path="/monthly" component={Monthly_Donation} />
  
          <Route exact path="/careers" component={Careers} />
          <Route exact path="/foster" component={Foster} />
          <Route exact path="/volunteer" component={Volunteer} />
  
          <Route exact path="/adopt" component={Adoption} />
          <Route exact path="/lost" component={Lost_Found} />
          <Route exact path="/spay" component={Spay_Neuter} />
          <Route exact path="/vax" component={Vaccine_Microchip} />
          <Route exact path="/cats" component={Community_Cats} />
          <Route exact path="/dogs" component={Community_Dogs} />
        </Switch>
        <Footer />
      </Router>
      <header className="App-header">
        <h1>Cats of Chaouen</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to Cats of Chaouen main page.
          We're delighted by your interest!
        </p>
      </header>
    </div>
  );
}

export default App;
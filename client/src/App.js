import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import Story from './pages/About/Story/Story';
import Mission from './pages/About/Mission/Mission';
import FollowUs from "./pages/About/FollowUs/FollowUs";
import Blog from './pages/About/Blog/Blog';
import FAQ from './pages/About/FAQ/FAQ';
import Partners from './pages/About/Partners/Partners';
import Team from './pages/About/Team/Team';

import ContactForm from './pages/Contact/ContactForm/ContactForm';
import LocationHours from './pages/Contact/LocationHours/LocationHours';
import SocialLinks from './pages/Contact/SocialLinks/SocialLinks';

import Donation from './pages/Donate/Donation/Donation';
import Fundraiser from './pages/Donate/Fundraiser/Fundraiser';
import MonthlyDonation from './pages/Donate/MonthlyDonation/MonthlyDonation';

import Careers from './pages/Involve/Careers/Careers';
import Foster from './pages/Involve/Foster/Foster';
import Volunteer from './pages/Involve/Volunteer/Volunteer';

import Adoption from './pages/Services/Adoption/Adoption';
import CommunityCats from './pages/Services/CommunityCats/CommunityCats';
import CommunityDogs from './pages/Services/CommunityDogs/CommunityDogs';
import LostFound from './pages/Services/LostFound/LostFound';
import SpayNeuter from './pages/Services/SpayNeuter/SpayNeuter';
import VaccineMicrochip from './pages/Services/VaccineMicrochip/VaccineMicrochip';

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <div className="App-body">
          <Switch>
            <Route exact path="/story" component={Story} />
            <Route exact path="/mission" component={Mission} />
            <Route exact path="/blog" component={Blog} />
            <Route exact path="/follow" component={FollowUs} />
            <Route exact path="/faq" component={FAQ} />
            <Route exact path="/partners" component={Partners} />
            <Route exact path="/team" component={Team} />

            <Route exact path="/contact" component={ContactForm} />
            <Route exact path="/location" component={LocationHours} />
            <Route exact path="/message" component={SocialLinks} />
    
            <Route exact path="/donate" component={Donation} />
            <Route exact path="/fundraiser" component={Fundraiser} />
            <Route exact path="/monthly" component={MonthlyDonation} />
    
            <Route exact path="/careers" component={Careers} />
            <Route exact path="/foster" component={Foster} />
            <Route exact path="/volunteer" component={Volunteer} />
    
            <Route exact path="/adopt" component={Adoption} />
            <Route exact path="/lost" component={LostFound} />
            <Route exact path="/spay" component={SpayNeuter} />
            <Route exact path="/vax" component={VaccineMicrochip} />
            <Route exact path="/cats" component={CommunityCats} />
            <Route exact path="/dogs" component={CommunityDogs} />
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
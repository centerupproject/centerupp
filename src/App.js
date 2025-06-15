import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation
} from 'react-router-dom';

import Home from './pages/home/home.js';
import Header from './layouts/header/header.js';
import Footer from './layouts/footer/footer.js';
import Membership from './pages/membership/membership.js';
import MembershipForm from './pages/membership/membershipForm.js';
import Junior from './pages/junior/junior.js';
import JuniorForm from './pages/junior/juniorForm.js';
import Universities from './pages/universities/universities.js';
import UniversitiesForm from './pages/universities/universitiesForm.js';
import Workshops from './pages/workshops/workshops.js';
import Conferances from './pages/conferances/conferances.js';
import FutureUp from './pages/futureUp/futureUp.js';
import UpComing from './pages/upcomingEvents/upcomingEvents.js';
import EventOrg from './pages/eventOrg/eventOrg.js';
import InternationalCamps from './pages/intCamps/intCamps.js';
import AboutUs from './pages/aboutUs/aboutUs.js';

import { GoogleOAuthProvider } from '@react-oauth/google';
import './App.css';
import OurTeam from './pages/ourTeam/ourTeam.js';
import ContactUs from './pages/contactUs/contactUs.js';
import Map from './components/Map/Map.js';

const AppRoutes = () => {
  const location = useLocation();

  return (
    <>
      <Header />
      <main style={{ marginTop: '100px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/membership" element={<Membership />} />
          <Route path="/membership/form" element={<MembershipForm />} />
          <Route path="/Junior" element={<Junior />} />
          <Route path="/junior/form" element={<JuniorForm />} />
          <Route path="/universities" element={<Universities />} />
          <Route path="/universities/form" element={<UniversitiesForm />} />
          <Route path="/courses-activities" element={<Workshops />} />
          <Route path="/conferences" element={<Conferances />} />
          <Route path="/futureUp" element={<FutureUp />} />
          <Route path="/upcoming" element={<UpComing />} />
          <Route path="/eventorg" element={<EventOrg />} />
          <Route path="/international-camps" element={<InternationalCamps />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/our-team" element={<OurTeam />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/map" element={<Map />} />
        </Routes>
      </main>
      {location.pathname !== "/contact-us" && <Footer />}
    </>
  );
};

const App = () => {
  return (
    <GoogleOAuthProvider clientId="336925899208-iemfbn286iq9sg0gbr51n8akildpdsuc.apps.googleusercontent.com">
      <Router>
        <AppRoutes />
      </Router>
    </GoogleOAuthProvider>
  );
};

export default App;

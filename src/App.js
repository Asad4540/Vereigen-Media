import React from 'react';
import './App.css';
import { Container } from 'reactstrap';
//import Navbar from './components';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import AboutUsSection from './components/AboutUsSection';
import FooterSection from './components/FooterSection';
import ContactForm from './components/ContactForm';
//import './Style.css'



function App() {
  return (
    <Container fluid className="app">
    {/*<Navbar />*/}  
      <HeroSection />
      <ServicesSection />
      <AboutUsSection />
      <ContactForm />
      <FooterSection />
    </Container>
  );
}

export default App;

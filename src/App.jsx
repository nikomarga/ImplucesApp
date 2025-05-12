import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import AboutUs from './components/AboutUs';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <AboutUs />
      <ContactForm />
      <Footer/>
    </>
  )
}

export default App

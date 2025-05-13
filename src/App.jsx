import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import AboutUs from './components/AboutUs';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import Buscar from './components/Buscar'; // Asegúrate que exista este archivo


function App() {

  return (
    <>
      <Navbar />

      <div className="container-fluid">
        <div className="row">
          {/* Columna 20% */}
          <div className="col-12 col-md-2 col-lg-2 p-3 bg-light">
            <Buscar />
          </div>

          {/* Columna 80% */}
          <div className="col-12 col-md-10 col-lg-10 p-3 bg-light">
            <Hero />
            <Services />
          </div>
        </div>
      </div>
      <AboutUs />
      <ContactForm />
      <Footer />
    </>
  );
}

export default App

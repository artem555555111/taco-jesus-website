import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import NuestraHistoria from './components/NuestraHistoria';
import Especialidades from './components/Especialidades';
import Menu from './components/Menu';
import Gallery from './components/Gallery';
import Events from './components/Events';
import Contacts from './components/Contacts';
import Footer from './components/Footer';
import SEOHead from './components/SEOHead';
import SchemaMarkup from './components/SchemaMarkup';
import useLanguageSync from './hooks/useLanguageSync';
import { registerSW } from './utils/pwaUtils';

function App() {
  useLanguageSync();
  
  useEffect(() => {
    registerSW();
  }, []);
  
  return (
    <div className="App">
      <SEOHead />
      <SchemaMarkup />
      <Header />
      <main>
        <Hero />
        <NuestraHistoria />
        <Especialidades />
        <Menu />
        <Gallery />
        <Events />
        <Contacts />
      </main>
      <Footer />
    </div>
  );
}

export default App;

import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Menu from './components/Menu';
import Gallery from './components/Gallery';
import Reviews from './components/Reviews';
import Events from './components/Events';
import Contacts from './components/Contacts';
import Footer from './components/Footer';
import useLanguageSync from './hooks/useLanguageSync';

function App() {
  useLanguageSync();
  
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <Menu />
        <Gallery />
        <Reviews />
        <Events />
        <Contacts />
      </main>
      <Footer />
    </div>
  );
}

export default App;

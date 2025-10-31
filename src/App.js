import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import CookieModal from './components/CookieModal';
import ProductSection from './components/ProductSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <ProductSection />
      <Footer />
      <CookieModal />
    </div>
  );
}

export default App;
import React from 'react';
import About from './components/About';
import Features from './components/Features';
import Footer from './components/Footer';
import Hero from './components/Hero';
import ImageSection from './components/ImageSection';
import Intro from './components/Intro';
import Navbar from './components/Navbar';
import MetaPixel from './components/MetaPixel';

const App = () => {
  return (
    <>
      <MetaPixel />
      <main>
        <Navbar />
        <Hero />
        <Intro />
        <ImageSection />
        <Features />
        <About />
        <Footer />
      </main>
    </>
  );
};

export default App;

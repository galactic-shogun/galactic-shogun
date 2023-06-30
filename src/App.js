import React from 'react';
import Hero from './components/Hero';
import Intro from './components/Intro';
import Features from './components/Features';
import About from './components/About';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <main>
        <Hero />
        <Intro />
        <Features />
        <About />
        <Footer />
      </main>
    </>
  );
};

export default App;

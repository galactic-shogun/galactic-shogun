import React, { useRef } from 'react';
import About from './components/About';
import Features from './components/Features';
import Footer from './components/Footer';
import Hero from './components/Hero';
import ImageSection from './components/ImageSection';
import Intro from './components/Intro';
import Navbar from './components/Navbar';
import { motion, useInView } from 'framer-motion';
import useScrollDirection from './hooks/useScrollDirection';

const App = () => {
  const scrollDir = useScrollDirection('down');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <>
      <main>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: isInView && scrollDir === 'up' ? 1 : 0,
            y: isInView && scrollDir === 'up' ? 0 : -150,
          }}
          transition={{ duration: 0.4 }}
          className='fixed left-0 right-0 top-0 z-50'
        >
          <Navbar />
        </motion.div>
        <Hero />
        <div className='relative'>
          <Intro />
          <div ref={ref} className='absolute bottom-1/4' />
        </div>
        <ImageSection />
        <Features />
        <About />
        <Footer />
      </main>
    </>
  );
};

export default App;

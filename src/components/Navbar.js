import { motion } from 'framer-motion';
import React, { useState, useEffect } from 'react';
import Icon from '../icons/Icon';
import { LINKS } from '../utils/constants';
import useScrollDirection from '../hooks/useScrollDirection';
import useScrollPosition from '../hooks/useScrollPosition';

const Navbar = ({ className = '' }) => {
  const scrollDir = useScrollDirection({
    initialDirection: 'up',
    thresholdPixels: 25,
  });
  const scrollPosition = useScrollPosition();
  const [scrolledToTop, setScrolledToTop] = useState(true);

  useEffect(() => {
    setScrolledToTop(scrollPosition < 70);
  }, [scrollPosition]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const showNavbar = !scrolledToTop && scrollDir === 'up';

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{
        opacity: showNavbar ? 1 : 0,
        y: showNavbar ? 0 : -150,
      }}
      transition={{ duration: 0.4 }}
      className={`fixed left-0 right-0 top-0 z-50 bg-background ${className}`}
    >
      <div className='mx-auto flex max-w-screen-xl items-center justify-between px-6 py-4'>
        <div className='hidden justify-center gap-2 md:flex'>
          <a
            href={LINKS.FACEBOOK}
            className='transform rounded-lg bg-zinc-100 p-2 transition hover:scale-105 hover:shadow-lg'
          >
            <Icon name='facebook' className='h-4 w-4 text-background' />
          </a>
          <a
            href={LINKS.INSTAGRAM}
            className='transform rounded-lg bg-zinc-100 p-2 transition hover:scale-105 hover:shadow-lg'
          >
            <Icon name='instagram' className='h-4 w-4 text-background' />
          </a>
          <a
            href={LINKS.TIKTOK}
            className='transform rounded-lg bg-zinc-100 p-2 transition hover:scale-105 hover:shadow-lg'
          >
            <Icon name='tiktok' className='h-4 w-4 text-background' />
          </a>
        </div>
        <Icon name='logo' className='h-6 w-auto md:h-8' />
        <button
          onClick={scrollToTop}
          className='button transform p-2 text-xs hover:scale-105'
        >
          GET NOTIFIED
        </button>
      </div>
    </motion.nav>
  );
};

export default Navbar;

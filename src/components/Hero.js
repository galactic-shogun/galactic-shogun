import { Canvas } from '@react-three/fiber';
import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import Logo from '../icons/Logo';
import SpaceWarp from './SpaceWarp';
import Icon from '../icons/Icon';
import BoxCard from '../images/Box+Cards.png';

const Hero = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Canvas
        className='min-h-screen bg-black'
        style={{ position: 'absolute' }}
        camera={{
          fov: 100,
          near: 0.1,
          far: 200,
        }}
      >
        {process.env.NODE_ENV === 'production' && <SpaceWarp />}
      </Canvas>
      <section className='section relative z-0 flex h-screen bg-gradient-to-t from-background to-50% '>
        <div
          className={`mx-auto flex h-full w-full max-w-screen-xl flex-col items-center justify-center gap-20 ${
            show && 'md:items-start'
          }`}
        >
          <motion.div layout transition={{ duration: 0.25 }}>
            <motion.div
              animate={{ opacity: 100 }}
              initial={{ opacity: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              <Logo className={`w-64 ${show ? 'md:w-48' : 'md:w-96'}`} />
            </motion.div>
          </motion.div>
          <AnimatePresence>
            {show && (
              <>
                <motion.div
                  layout
                  animate={{ opacity: 100, y: 0 }}
                  initial={{ opacity: 0, y: 100 }}
                  className='mb-auto flex w-full items-center justify-between'
                >
                  <div className='flex flex-col items-center gap-5 md:items-start'>
                    <div className='flex flex-col items-center gap-4 text-center md:items-start md:text-left'>
                      <h3 className='font-serif text-sm font-semibold'>
                        KICKSTARTER LAUNCH FALL 2023
                      </h3>
                      <h2 className='section-title text-primary md:text-5xl'>
                        Master the Cosmos with
                        <div>Galactic Shogun</div>
                      </h2>
                      <p className='font-serif text-sm'>
                        A new fast-paced and dynamic social deduction board game
                        for 4-8 players!
                      </p>
                    </div>
                    <div className='flex flex-col gap-2 md:w-full md:max-w-md'>
                      <input className='input' placeholder='First Name' />
                      <input className='input' placeholder='Email Address' />
                      <button className='button transform hover:scale-105'>
                        GET NOTIFIED
                      </button>
                    </div>
                  </div>
                  <img
                    src={BoxCard}
                    alt='box+card'
                    className='hidden h-auto w-[500px] object-contain md:block'
                  />
                </motion.div>
                <motion.div
                  animate={{ opacity: 100 }}
                  initial={{ opacity: 0 }}
                  transition={{ duration: 0.5, delay: 0.75 }}
                  className='absolute bottom-[10%] left-1/2 flex -translate-x-1/2'
                >
                  <Icon
                    name='arrow-down'
                    className='relative h-12 animate-bounce text-zinc-100'
                  />
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>
      </section>
    </>
  );
};

export default Hero;

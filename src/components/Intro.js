import { motion } from 'framer-motion';
import React from 'react';
import MetalIcon from '../icons/MetalIcon';

const metalAnimation = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
  transition: {
    duration: 0.5,
  },
};

const Intro = () => {
  return (
    <motion.section
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, opacity: { duration: 0.325 } }}
      className='section relative overflow-x-clip md:pt-3'
    >
      <div className='relative z-30 mx-auto flex max-w-2xl flex-col gap-4 text-center'>
        <h2 className='section-title '>What is Galactic Shogun?</h2>
        <p className='font-serif text-sm text-tertiary-light'>
          Meet the game designer and learn how to play Galactic Shogun!
        </p>
        <iframe
          height='300'
          className='z-10 rounded-md'
          src='https://www.youtube.com/embed/B7HWLWf2S9w'
          title='YouTube video player'
          allow='accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          allowFullScreen
        ></iframe>
        <a
          href='https://www.kickstarter.com/projects/peterluo/2043897814?ref=9jufr2&token=f66ffddc'
          target='_blank'
          rel='noreferrer'
          className='button z-30 w-full transform hover:scale-105'
        >
          FIND US ON KICKSTARTER
        </a>
      </div>
      <motion.div
        initial={metalAnimation.initial}
        whileInView={metalAnimation.animate}
        transition={metalAnimation.transition}
        className='z-20'
      >
        <MetalIcon className='absolute -top-1/3 right-0 z-20 h-auto w-96 translate-x-1/2 stroke-primary' />
        <MetalIcon className='absolute -bottom-1/3 left-0 z-20 h-auto w-96 -translate-x-1/2 rotate-90 stroke-primary' />
      </motion.div>
    </motion.section>
  );
};

export default Intro;

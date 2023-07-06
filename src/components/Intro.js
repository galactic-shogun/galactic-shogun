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
      className='section overflow-x-clip md:pt-3'
    >
      <div className='relative mx-auto max-w-screen-2xl'>
        <div className='align-center relative z-30 mx-auto flex flex-col items-center justify-center gap-6 overflow-visible text-center'>
          <h2 className='section-title md:max-w-sm'>
            What is Galactic Shogun?
          </h2>
          <p className='font-serif text-sm text-tertiary-light md:max-w-sm'>
            Meet the game designer and learn how to play Galactic Shogun!
          </p>
          <iframe
            className='z-10 h-80 w-full max-w-5xl rounded-md shadow-md md:order-4 md:h-[27rem]'
            src='https://www.youtube.com/embed/B7HWLWf2S9w'
            title='YouTube video player'
            allow='accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            allowFullScreen
          ></iframe>
          <a
            href='https://www.kickstarter.com/projects/peterluo/2043897814?ref=9jufr2&token=f66ffddc'
            target='_blank'
            rel='noreferrer'
            className='button z-30 w-full transform hover:scale-105 md:max-w-sm'
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
          <MetalIcon className='absolute -top-1/3 right-0 z-20 h-auto w-96 translate-x-1/2 stroke-primary md:translate-x-1/4' />
          <MetalIcon className='absolute -bottom-1/3 left-0 z-20 h-auto w-96 -translate-x-1/2 rotate-90 stroke-primary md:-translate-x-1/4' />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Intro;

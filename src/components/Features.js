import { motion } from 'framer-motion';
import React from 'react';
import MetalIcon from '../icons/MetalIcon';
import FeatureCard from './FeatureCard';

const Features = () => {
  return (
    <motion.section
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      className='section relative overflow-x-clip'
    >
      <div className='flex flex-col items-center gap-9'>
        <div className='z-30 flex flex-col gap-4 text-center'>
          <h2 className='section-title'>Social Deduction for Everyone</h2>
          <p className='font-serif text-sm text-tertiary-light'>
            Where honor, power, and strategy intersect. Are you ready to conquer
            the stars?
          </p>
        </div>
        <div className='flex max-w-max flex-col justify-center gap-10 rounded-lg border-2 bg-tertiary/[0.15] px-6 py-10 md:flex-row'>
          <FeatureCard
            icon='samurai'
            title='Fast & furious.'
            description='Games take 15-45 minutes and set up is easy. The game state changes drastically every turn when a card is played.'
            className='flex-1 md:max-w-xs'
          />
          <FeatureCard
            icon='ninja'
            title='Can’t lie? All good.'
            description='No one “dies” and those who can’t lie are given multiple opportunities to stay in the game.'
            className='flex-1 md:max-w-xs'
          />
          <FeatureCard
            icon='sakura'
            title='It’s not over til it’s over.'
            description='All Play Cards have the ability to help you win the game, but you will always need plans A-Z as the other players disrupt your gameplay.'
            className='flex-1 md:max-w-xs'
          />
        </div>
      </div>
      <MetalIcon className='absolute bottom-1/4 right-0 z-0 h-auto w-96 translate-x-1/3 stroke-white/50' />
      <MetalIcon className='absolute bottom-0 left-0 z-0 h-auto w-96 -translate-x-1/2 stroke-white/50' />
    </motion.section>
  );
};

export default Features;

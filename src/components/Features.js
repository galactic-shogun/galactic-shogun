import { motion } from 'framer-motion';
import React from 'react';
import MetalIcon from '../icons/MetalIcon';
import FeatureCard from './FeatureCard';
import { Features as FeaturesConfig } from '../utils/config';

const Features = () => {
  return (
    <motion.section
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className='section relative overflow-x-clip'
    >
      <div className='relative mx-auto max-w-screen-2xl'>
        <div className='flex flex-col items-center gap-9 md:gap-16'>
          <div className='z-30 flex flex-col gap-4 text-center md:max-w-sm'>
            <h2 className='section-title'>{FeaturesConfig.Title}</h2>
            <p className='font-serif text-sm text-tertiary-light'>
              {FeaturesConfig.Description}
            </p>
          </div>
          <div className='flex max-w-max flex-col justify-center gap-10 rounded-lg border-2 bg-tertiary/[0.15] px-6 py-10 md:flex-row'>
            {FeaturesConfig.Features.map((feature, index) => (
              <FeatureCard
                key={index}
                className='flex-1 md:max-w-xs'
                {...feature}
              />
            ))}
          </div>
        </div>
        <MetalIcon className='absolute bottom-1/4 right-0 z-0 h-auto w-96 translate-x-1/3 stroke-white/50 md:-top-1/3 md:bottom-0' />
        <MetalIcon className='absolute bottom-0 left-0 z-0 h-auto w-96 -translate-x-1/2 stroke-white/50 md:-bottom-1/3' />
      </div>
    </motion.section>
  );
};

export default Features;

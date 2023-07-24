import React from 'react';
import BoxImage from '../images/Box.png';
import Dango from '../images/Dango.png';
import { About as AboutConfig } from '../utils/config';

const About = () => {
  return (
    <section className='section bg-gray-950 bg-gradient-to-b from-background to-15%'>
      <div className='mx-auto flex max-w-screen-2xl flex-col items-center justify-center'>
        <div className='text-center'>
          <h2 className='section-title'>{AboutConfig.Title}</h2>
        </div>
        <div className='mt-12 md:mt-16 md:flex md:items-center md:bg-transparent'>
          <div className='-mb-8 md:flex-1'>
            <img
              src={BoxImage}
              alt='box'
              className='md:h-full md:w-full md:object-contain'
            />
          </div>
          <ul className='max-w-2xl rounded-lg bg-zinc-100 p-6 text-center font-serif text-gray-500 md:mb-8 md:grid md:h-min md:flex-1 md:grid-cols-2 md:grid-rows-2 md:gap-x-8 md:rounded-3xl md:px-8 md:py-10 md:text-left'>
            <li className='mb-1.5 text-xl font-semibold text-background md:hidden'>
              What's in the Box?
            </li>
            <li className='md:order-1 md:font-sans md:text-xl md:font-bold md:text-background'>
              1x Rule Sheet
              <ul className='mt-2 hidden list-inside list-disc font-serif text-base font-normal md:block'>
                <li>
                  The rule sheet with all of the game's instructions and card
                  distribution based on the number of players.
                </li>
              </ul>
            </li>
            <li className='md:order-3 md:font-sans md:text-xl md:font-bold md:text-background'>
              8x Role Cards <span className='md:hidden'>(4 Unique)</span>
              <ul className='mt-2 hidden list-inside list-disc font-serif text-base font-normal md:block'>
                <li>4x Space Ninjas</li>
                <li>1x Galactic Shogun</li>
                <li>1x Ascendant</li>
                <li>2x Star Protectorate</li>
              </ul>
            </li>
            <li className='md:order-2 md:row-span-2 md:font-sans md:text-xl md:font-bold md:text-background'>
              32x Play Cards <span className='md:hidden'>(10 Unique)</span>
              <ul className='mt-2 hidden list-inside list-disc font-serif text-base font-normal md:block'>
                <li>1x Once Upon a Time</li>
                <li>3x Laser Katana of Judgement</li>
                <li>2x Hologram</li>
                <li>4x Body Swap</li>
                <li>4x X-Ray Vision</li>
                <li>3x Vortex Smoke Bomb</li>
                <li>3x Space Armoury</li>
                <li>5x Chimera</li>
                <li>3x Planet of Thieves</li>
                <li>4x Duplicator</li>
              </ul>
            </li>
            <li className='md:hidden'>
              Tons of Fun
              <ul className='hidden md:block'></ul>
            </li>
          </ul>
        </div>
        <div className='mt-8 flex flex-col justify-center gap-6 p-6 md:hidden'>
          <h3 className='text-center font-serif text-xl font-bold'>
            Presented by
            <div>Dango Games Inc.</div>
          </h3>
          <div className='flex justify-center'>
            <img src={Dango} alt='dango' className='w-44' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

import React from 'react';
import { renderToString } from 'react-dom/server';
import Icon from '../icons/Icon';
import ShogunIcon from '../icons/ShogunIcon';
import Dango from '../images/Dango.png';
import { Links } from '../utils/config';
import SignupForm from './SignupForm';
import { Footer as FooterConfig } from '../utils/config';

const Footer = () => {
  return (
    <footer className='bg-primary-dark bg-gradient-to-b from-gray-950 to-50% md:px-40'>
      <div
        style={{
          backgroundImage: `url("data:image/svg+xml,${encodeURIComponent(
            renderToString(<ShogunIcon />)
          )}")`,
        }}
        className='mx-auto max-w-screen-2xl bg-left-top bg-no-repeat px-6 pb-16 pt-20 md:bg-contain md:bg-right-bottom'
      >
        <div className='max-w-lg'>
          <div className='flex flex-col gap-6 text-center md:text-left'>
            <h2 className='section-title'>{FooterConfig.Title}</h2>
            <p className='font-serif text-sm md:max-w-md'>
              {FooterConfig.Description}
            </p>
          </div>
          <SignupForm
            className='mt-8'
            buttonText={FooterConfig.ButtonText}
            buttonSuccessText={FooterConfig.ButtonSuccessText}
            buttonClass='bg-secondary hover:bg-secondary-light active:bg-secondary-light disabled:bg-violet-800'
          />
          <div className='mt-16 flex flex-col items-center gap-4 md:mt-8 md:items-start'>
            <div className='text-center font-serif text-sm text-zinc-100'>
              Presented by Dango Games Inc. 2023 ©
            </div>
            <div className='flex justify-center gap-2'>
              <a
                href={Links.Facebook}
                className='transform rounded-lg bg-zinc-100 p-3 transition hover:scale-105 hover:shadow-lg'
              >
                <Icon name='facebook' className='h-5 w-5 text-primary' />
              </a>
              <a
                href={Links.Instagram}
                className='transform rounded-lg bg-zinc-100 p-3 transition hover:scale-105 hover:shadow-lg'
              >
                <Icon name='instagram' className='h-5 w-5 text-primary' />
              </a>
              <a
                href={Links.Tiktok}
                className='transform rounded-lg bg-zinc-100 p-3 transition hover:scale-105 hover:shadow-lg'
              >
                <Icon name='tiktok' className='h-5 w-5 text-primary' />
              </a>
            </div>
            <img
              src={Dango}
              alt='dango'
              className='hidden w-16 object-contain md:block'
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

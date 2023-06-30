import React from 'react';
import Icon from '../icons/Icon';

const Footer = () => {
  return (
    <footer className='bg-primary-dark bg-gradient-to-b from-gray-950 to-50% '>
      <div
        style={{ backgroundImage: `url(${require('../images/Shogun.png')})` }}
        className='bg-bottom bg-no-repeat px-6 pb-16 pt-20'
      >
        <div className='md:mx-auto md:max-w-[300px]'>
          <div className='flex flex-col gap-6 text-center'>
            <h2 className='section-title'>Ready for chaos?</h2>
            <p className='font-serif text-sm'>
              Subscribe now to receive exclusive deals and early news about our
              releases.
            </p>
          </div>
          <div className='mt-8 flex flex-col gap-2'>
            <input placeholder='First Name' className='input' />
            <input placeholder='Email Address' className='input' />
            <button className='button transform bg-secondary hover:scale-105 hover:bg-secondary-light active:bg-secondary-light'>
              SUBSCRIBE
            </button>
          </div>
          <div className='mt-16'>
            <div className='flex justify-center gap-2'>
              <a
                href='https://youtu.be/B7HWLWf2S9w'
                className='transform rounded-lg bg-zinc-100 p-3 transition hover:scale-105 hover:shadow-lg'
              >
                <Icon name='facebook' className='h-5 w-5 text-primary' />
              </a>
              <a
                href='https://youtu.be/B7HWLWf2S9w'
                className='transform rounded-lg bg-zinc-100 p-3 transition hover:scale-105 hover:shadow-lg'
              >
                <Icon name='instagram' className='h-5 w-5 text-primary' />
              </a>
              <a
                href='https://youtu.be/B7HWLWf2S9w'
                className='transform rounded-lg bg-zinc-100 p-3 transition hover:scale-105 hover:shadow-lg'
              >
                <Icon name='tiktok' className='h-5 w-5 text-primary' />
              </a>
            </div>
            <div className='mt-2 text-center font-serif text-sm text-zinc-100'>
              Dango Games Inc. 2023 ©
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

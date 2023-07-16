import React from 'react';
import Icon from '../icons/Icon';
import { LINKS } from '../utils/constants';

const Navbar = ({ className = '' }) => {
  return (
    <nav className={`bg-background ${className}`}>
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
        <button className='button transform p-2 text-xs hover:scale-105'>
          GET NOTIFIED
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

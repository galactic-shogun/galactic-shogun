import React from 'react';
import ArrowDown from './ArrowDown';
import ArrowLeft from './ArrowLeft';
import ArrowRight from './ArrowRight';
import FacebookIcon from './FacebookIcon';
import InstagramIcon from './InstagramIcon';
import NinjaIcon from './NinjaIcon';
import SakuraIcon from './SakuraIcon';
import SamuraiIcon from './SamuraiIcon';
import SpaceIcon from './SpaceIcon';
import TikTokIcon from './TikTokIcon';
import ShogunIcon from './ShogunIcon';
import Logo from './Logo';

const Icon = ({ name, ...props }) => {
  switch (name) {
    case 'logo':
      return <Logo {...props} />;
    case 'shogun':
      return <ShogunIcon {...props} />;
    case 'ninja':
      return <NinjaIcon {...props} />;
    case 'samurai':
      return <SamuraiIcon {...props} />;
    case 'sakura':
      return <SakuraIcon {...props} />;
    case 'space-ship':
      return <SpaceIcon {...props} />;
    case 'instagram':
      return <InstagramIcon {...props} />;
    case 'facebook':
      return <FacebookIcon {...props} />;
    case 'tiktok':
      return <TikTokIcon {...props} />;
    case 'arrow-right':
      return <ArrowRight {...props} />;
    case 'arrow-left':
      return <ArrowLeft {...props} />;
    case 'arrow-down':
      return <ArrowDown {...props} />;
    default:
      return <SpaceIcon {...props} />;
  }
};

export default Icon;

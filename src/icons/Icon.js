import React from 'react';
import NinjaIcon from './NinjaIcon';
import SpaceIcon from './SpaceIcon';
import SamuraiIcon from './SamuraiIcon';
import SakuraIcon from './SakuraIcon';
import InstagramIcon from './InstagramIcon';
import FacebookIcon from './FacebookIcon';
import TikTokIcon from './TikTokIcon';
import ArrowRight from './ArrowRight';
import ArrowLeft from './ArrowLeft';

const Icon = ({ name, ...props }) => {
  switch (name) {
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
    default:
      return <SpaceIcon {...props} />;
  }
};

export default Icon;

import { motion, useInView } from 'framer-motion';
import React, { useRef } from 'react';
import ImageCarousel from './ImageCarousel';
import CardShogun from '../images/cards/Card Game 04 - Apr 07_Galactic Shogun.png';
import CardNinja from '../images/cards/Card Game 04 - Apr 07_Ninja.png';
import CardProtector from '../images/cards/Card Game 04 - Apr 07_Star Protectorate.png';
import CardAscendent from '../images/cards/Card Game 04 - Apr 07_Ascendent.png';
import CardKatana from '../images/cards/Card Game 04 - Apr 07_Action - Katana.png';

const images = [
  CardKatana,
  CardNinja,
  CardShogun,
  CardProtector,
  CardAscendent,
];

const ImageSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <motion.section
      ref={ref}
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, opacity: { duration: 0.325 } }}
      className='relative z-30 mx-auto max-w-screen-2xl overflow-x-hidden py-10 md:mb-12'
    >
      <ImageCarousel images={images} interval={isInView ? 2500 : null} />
    </motion.section>
  );
};

export default ImageSection;

import { motion } from 'framer-motion';
import React from 'react';
import ImageCarousel from './ImageCarousel';

const images = [
  'https://static.gettyimages.com/display-sets/creative-landing/images/GettyImages-1401177105.jpg',
  'https://images.pexels.com/photos/1353126/pexels-photo-1353126.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  'https://images.unsplash.com/photo-1581456495146-65a71b2c8e52?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aHVtYW58ZW58MHx8MHx8fDA%3D&w=1000&q=80',
  'https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGhvdG9ncmFwaHl8ZW58MHx8MHx8fDA%3D&w=1000&q=80',
  'https://images.pexels.com/photos/3693901/pexels-photo-3693901.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  'https://images.pexels.com/photos/1557652/pexels-photo-1557652.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
];

const ImageSection = () => {
  return (
    <motion.section
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, opacity: { duration: 0.325 } }}
      className='relative z-30 overflow-x-hidden px-6'
    >
      <ImageCarousel images={images} interval={3000} />
    </motion.section>
  );
};

export default ImageSection;

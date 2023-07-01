import { AnimatePresence, MotionConfig, motion } from 'framer-motion';
import React, { useEffect, useState, useRef } from 'react';
import Icon from '../icons/Icon';

const ImageCarousel = ({ images = [], interval }) => {
  const [index, setIndex] = useState(0);
  const [imagesOrder, setImagesOrder] = useState(images);
  const [buttonClick, setButtonClick] = useState(false);
  const intervalIdRef = useRef(null);

  useEffect(() => {
    if (interval) {
      intervalIdRef.current = setInterval(() => {
        setIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, interval);

      return () => {
        clearInterval(intervalIdRef.current);
      };
    }
  }, [images, interval]);

  useEffect(() => {
    const length = images.length;
    const shift = Math.floor(length / 2) - index;
    const shiftedArray = images.slice(shift).concat(images.slice(0, shift));
    setImagesOrder(shiftedArray);
  }, [index, images]);

  useEffect(() => {
    if (buttonClick && interval) {
      clearInterval(intervalIdRef.current);
      intervalIdRef.current = setInterval(() => {
        setIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, interval);
      setButtonClick(false);
    }
  }, [buttonClick, interval, images]);

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % images.length);
    setButtonClick(true);
  };

  const handlePrev = () => {
    setIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    setButtonClick(true);
  };

  const getZIndex = (index) => {
    if (index === 0 || index === images.length - 1) return 10;
    else return 30;
  };

  const getOpacity = (index) => {
    if (images.length <= 2) return 1;
    else if (index === 0 || index === images.length - 1) return 0;
    return 1;
  };

  return (
    <MotionConfig transition={{ duration: 0.75, type: 'spring' }}>
      <div className='relative mx-auto'>
        <div className='relative flex h-full justify-center gap-4'>
          <AnimatePresence>
            {imagesOrder.map((image, i) => (
              <motion.img
                key={image}
                animate={{
                  opacity: getOpacity(i),
                  zIndex: getZIndex(i),
                }}
                layout
                src={image}
                alt='carousel'
                className='aspect-[2/3] max-w-xs flex-1 rounded-xl object-cover'
              />
            ))}
          </AnimatePresence>
        </div>

        <button
          className='absolute left-2 top-1/2 z-40 -mt-4 flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-md'
          onClick={handlePrev}
        >
          <Icon name='arrow-left' className='h-6 w-6 text-black' />
        </button>
        <button
          className='absolute right-2 top-1/2 z-40 -mt-4 flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-md'
          onClick={handleNext}
        >
          <Icon name='arrow-right' className='h-6 w-6 text-black' />
        </button>
      </div>
    </MotionConfig>
  );
};

export default ImageCarousel;

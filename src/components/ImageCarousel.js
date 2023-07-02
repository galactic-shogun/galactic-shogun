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
        setIndex(
          (prevIndex) => (prevIndex - 1 + images.length) % images.length
        );
      }, interval);

      return () => {
        clearInterval(intervalIdRef.current);
      };
    }
  }, [images, interval]);

  useEffect(() => {
    if (buttonClick && interval) {
      clearInterval(intervalIdRef.current);
      intervalIdRef.current = setInterval(() => {
        setIndex(
          (prevIndex) => (prevIndex - 1 + images.length) % images.length
        );
      }, interval);
      setButtonClick(false);
    }
  }, [buttonClick, interval, images]);

  useEffect(() => {
    const shift = index % images.length;
    setImagesOrder([...images.slice(-shift), ...images.slice(0, -shift)]);
  }, [index, images]);

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    setButtonClick(true);
  };

  const handlePrev = () => {
    setIndex((prevIndex) => (prevIndex + 1) % images.length);
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
      <div className='relative'>
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
                className='aspect-[2/3] h-96 max-w-xs flex-1 rounded-lg object-cover'
              />
            ))}
          </AnimatePresence>
        </div>

        <button
          className='absolute left-2 top-1/2 z-40 flex h-8 w-8 -translate-y-1/2 transform items-center justify-center rounded-full bg-white shadow-md md:left-20'
          onClick={handlePrev}
        >
          <Icon name='arrow-left' className='h-6 w-6 text-black' />
        </button>
        <button
          className='absolute right-2 top-1/2 z-40 flex h-8 w-8 -translate-y-1/2 transform items-center justify-center rounded-full bg-white shadow-md md:right-20'
          onClick={handleNext}
        >
          <Icon name='arrow-right' className='h-6 w-6 text-black' />
        </button>
      </div>
    </MotionConfig>
  );
};

export default ImageCarousel;

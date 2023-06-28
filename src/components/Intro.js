import { motion } from 'framer-motion';
import React from 'react';
import MetalIcon from '../icons/MetalIcon';

const metalAnimation = {
	initial: {
		opacity: 0,
	},
	animate: {
		opacity: 1,
	},
	transition: {
		duration: 0.5,
	},
};

const Intro = () => {
	return (
		<motion.section
			initial={{ y: 100, opacity: 0 }}
			whileInView={{ y: 0, opacity: 1 }}
			viewport={{ once: true, amount: 0.2 }}
			transition={{ duration: 0.5 }}
			className='section relative overflow-x-clip'
		>
			<div className='flex flex-col gap-4 text-center relative z-30'>
				<h2 className='section-title '>What is Galactic Shogun?</h2>
				<p className='text-sm font-serif text-tertiary-light'>
					Meet the game designer and learn how to play Galactic Shogun!
				</p>
				<iframe
					height='300'
					className='rounded-md z-10'
					src='https://www.youtube.com/embed/B7HWLWf2S9w'
					title='YouTube video player'
					allow='accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
					allowFullScreen
				></iframe>
				<a
					href='https://www.kickstarter.com/projects/peterluo/2043897814?ref=9jufr2&token=f66ffddc'
					target='_blank'
					rel='noreferrer'
					className='button transform hover:scale-105 w-full z-30'
				>
					FIND US ON KICKSTARTER
				</a>
			</div>
			<motion.div
				initial={metalAnimation.initial}
				whileInView={metalAnimation.animate}
				transition={metalAnimation.transition}
				className='z-20'
			>
				<MetalIcon className='stroke-primary absolute z-20 -top-1/3 right-0 translate-x-1/2' />
				<MetalIcon className='stroke-primary absolute z-20 -bottom-1/3 left-0 -translate-x-1/2 rotate-90' />
			</motion.div>
		</motion.section>
	);
};

export default Intro;

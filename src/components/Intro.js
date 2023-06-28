import React from 'react';
import MetalIcon from '../icons/MetalIcon';

const Intro = () => {
	return (
		<section className='section bg-zinc-100 relative overflow-hidden'>
			<div className='flex flex-col gap-4 text-center z-10'>
				<h2 className='section-title text-tertiary-dark'>
					What is Galactic Shogun?
				</h2>
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
				>
					<button className='button w-full'>FIND US ON KICKSTARTER</button>
				</a>
			</div>
			<MetalIcon className='stroke-primary absolute z-0 -top-1/3 right-0 translate-x-1/2' />
			<MetalIcon className='stroke-primary absolute z-0 -bottom-1/3 left-0 -translate-x-1/2 rotate-90' />
		</section>
	);
};

export default Intro;

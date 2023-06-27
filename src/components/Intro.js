import React from 'react';
import Button from '../elements/Button';
import Section from '../elements/Section';
import SectionTitle from '../elements/SectionTitle';

const Intro = () => {
	return (
		<Section>
			<div className='flex flex-col gap-6 text-center'>
				<SectionTitle>Intro to the Galactic Shogun</SectionTitle>
				<p className='text-sm font-serif text-tertiary-light'>
					Hook / description for the video for people to get interested in
					watching.
				</p>
				<iframe
					height='300'
					className='rounded-md'
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
					<Button className='w-full'>FIND US ON KICKSTARTER</Button>
				</a>
			</div>
		</Section>
	);
};

export default Intro;

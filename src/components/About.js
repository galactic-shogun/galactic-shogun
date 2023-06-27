import React from 'react';
import Section from '../elements/Section';
import SectionTitle from '../elements/SectionTitle';

const About = () => {
	return (
		<Section className='bg-gradient-to-b from-gray-950 to-10%'>
			<div className='text-center'>
				<SectionTitle>What to expect</SectionTitle>
			</div>
			<div className='p-6 mt-6 rounded-lg bg-zinc-100'>
				<div className='flex flex-col gap-2'>
					<h4 className='text-xl font-serif text-black font-semibold'>
						What’s in the box?
					</h4>
					<p className='font-serif text-gray-500'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit id venenatis
						pretium risus euismod dictum egestas orci netus.
					</p>
				</div>
			</div>
			<div className='p-6 mt-8 flex flex-col gap-2'>
				<h3 className='font-serif font-bold'>Who’s Dango Games Inc.?</h3>
				<p className='font-serif'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit id venenatis
					pretium risus euismod dictum egestas orci netus feugiat ut.
				</p>
			</div>
		</Section>
	);
};

export default About;

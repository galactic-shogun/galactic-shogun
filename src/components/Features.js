import React from 'react';
import Section from '../elements/Section';
import SectionTitle from '../elements/SectionTitle';

const Features = () => {
	return (
		<Section className='bg-gray-950'>
			<div className='flex flex-col gap-4 text-center'>
				<SectionTitle>When Strategy Meets Interstellar Warfare</SectionTitle>
				<p className='text-sm text-tertiary-light'>
					Where honor, power, and strategy intersect. Are you ready to conquer
					the stars?
				</p>
			</div>
		</Section>
	);
};

export default Features;

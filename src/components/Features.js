import React from 'react';
import Section from '../elements/Section';
import SectionTitle from '../elements/SectionTitle';
import FeatureCard from './FeatureCard';

const Features = () => {
	return (
		<Section className='bg-gray-950 flex flex-col gap-9'>
			<div className='flex flex-col gap-4 text-center'>
				<SectionTitle>When Strategy Meets Interstellar Warfare</SectionTitle>
				<p className='text-sm font-serif text-tertiary-light'>
					Where honor, power, and strategy intersect. Are you ready to conquer
					the stars?
				</p>
			</div>
			<div className='flex flex-col gap-6'>
				<FeatureCard
					title='Immersive Futuristic Setting'
					description='Every element of the game has been meticulously crafted to transport you to a world where power and destiny collide.'
				/>
				<FeatureCard
					title='Immersive Futuristic Setting'
					description='Every element of the game has been meticulously crafted to transport you to a world where power and destiny collide.'
				/>
				<FeatureCard
					title='Immersive Futuristic Setting'
					description='Every element of the game has been meticulously crafted to transport you to a world where power and destiny collide.'
				/>
			</div>
		</Section>
	);
};

export default Features;

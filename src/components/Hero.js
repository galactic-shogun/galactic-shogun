import React from 'react';
import Button from '../elements/Button';
import Input from '../elements/Input';
import Logo from '../elements/Logo';
import Section from '../elements/Section';
import SectionTitle from '../elements/SectionTitle';

const Hero = () => {
	return (
		<Section className='min-h-screen bg-indigo-950 flex flex-col'>
			<Logo className='mb-20' />
			<div className='flex flex-col gap-10'>
				<div className='flex flex-col gap-4 text-center'>
					<SectionTitle>Master the Cosmos with Galactic Shogun</SectionTitle>
					<p className='text-sm text-tertiary-light'>
						Sign up now to receive exclusive updates and be the first to conquer
						the cosmos!
					</p>
				</div>
				<div className='flex flex-col gap-2'>
					<Input placeholder='Enter your email' />
					<Button>SUBSCRIBE</Button>
				</div>
			</div>
		</Section>
	);
};

export default Hero;

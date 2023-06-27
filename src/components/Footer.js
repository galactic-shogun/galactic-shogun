import React from 'react';
import Button from '../elements/Button';
import Input from '../elements/Input';
import SectionTitle from '../elements/SectionTitle';

const Footer = () => {
	return (
		<footer className='py-16 px-6 bg-gray-950'>
			<div className='flex flex-col gap-6 text-center'>
				<SectionTitle>Ready for chaos?</SectionTitle>
				<p className='text-sm font-serif text-tertiary-light'>
					Sign up now to receive exclusive updates and be the first to conquer
					the cosmos!
				</p>
			</div>
			<div className='flex flex-col gap-2 mt-8'>
				<Input placeholder='Enter your email' />
				<Button>SUBSCRIBE</Button>
			</div>
		</footer>
	);
};

export default Footer;

import React from 'react';
import Icon from '../icons/Icon';

const Footer = () => {
	return (
		<footer className='bg-primary bg-gradient-to-b from-gray-950 to-50% '>
			<div
				style={{ backgroundImage: `url(${require('../images/Shogun.png')})` }}
				className='pb-16 pt-20 px-6 bg-bottom bg-no-repeat'
			>
				<div className='md:max-w-[300px] md:mx-auto'>
					<div className='flex flex-col gap-6 text-center'>
						<h2 className='section-title'>Ready for chaos?</h2>
						<p className='text-sm font-serif'>
							Subscribe now to receive exclusive deals and early news about our
							releases.
						</p>
					</div>
					<div className='flex flex-col gap-2 mt-8'>
						<input placeholder='First Name' className='input' />
						<input placeholder='Email Address' className='input' />
						<button className='button bg-secondary'>SUBSCRIBE</button>
					</div>
					<div className='mt-16'>
						<div className='flex justify-center gap-2'>
							<a
								href='https://youtu.be/B7HWLWf2S9w'
								className='p-3 bg-zinc-100 rounded-lg'
							>
								<Icon name='facebook' className='w-5 h-5 text-primary' />
							</a>
							<a
								href='https://youtu.be/B7HWLWf2S9w'
								className='p-3 bg-zinc-100 rounded-lg'
							>
								<Icon name='instagram' className='w-5 h-5 text-primary' />
							</a>
							<a
								href='https://youtu.be/B7HWLWf2S9w'
								className='p-3 bg-zinc-100 rounded-lg'
							>
								<Icon name='tiktok' className='w-5 h-5 text-primary' />
							</a>
						</div>
						<div className='mt-2 text-sm font-serif text-zinc-100 text-center'>
							Dango Games Inc. 2023 ©
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;

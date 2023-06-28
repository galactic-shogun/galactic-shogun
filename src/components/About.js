import React from 'react';
import BoxImage from '../images/Box.png';
import Dango from '../images/Dango.png';

const About = () => {
	return (
		<section className='section bg-gray-950 bg-gradient-to-b from-background to-25%'>
			<div className='text-center'>
				<h2 className='section-title'>Game Contents</h2>
			</div>
			<div className='p-6 mt-44 rounded-lg bg-zinc-100 relative'>
				<img
					src={BoxImage}
					alt='box'
					className='absolute -top-full left-1/2 -translate-y-3.5 -translate-x-1/2'
				/>
				<ul className='font-serif text-gray-500 text-center'>
					<li>1x Rule Sheet</li>
					<li>8x Role Cards (4 Unique)</li>
					<li>32x Play Cards (10 Unique)</li>
					<li>Tons of Fun</li>
				</ul>
			</div>
			<div className='p-6 mt-8 flex flex-col justify-center gap-6'>
				<h3 className='text-xl font-serif font-bold text-center'>
					Presented by
					<div>Dango Games Inc.</div>
				</h3>
				<div className='flex justify-center'>
					<img src={Dango} alt='dango' className='w-44' />
				</div>
			</div>
		</section>
	);
};

export default About;

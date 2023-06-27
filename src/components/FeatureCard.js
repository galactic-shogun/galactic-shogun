import React from 'react';
import SpaceIcon from '../icons/SpaceIcon';

const FeatureCard = ({ title, description }) => {
	return (
		<div className='p-6 rounded-lg bg-zinc-100'>
			<SpaceIcon className='h-12 w-12 mx-auto mb-6 text-coolGray-900' />
			<div className='flex flex-col gap-2'>
				<h4 className='text-xl font-serif text-black font-semibold'>{title}</h4>
				<p className='font-serif text-gray-500'>{description}</p>
			</div>
		</div>
	);
};

export default FeatureCard;

import React from 'react';
import Icon from '../icons/Icon';

const FeatureCard = ({ icon, title, description }) => {
	return (
		<div className='text-center'>
			<Icon name={icon} className='h-24 mx-auto mb-10 text-zinc-100' />
			<div className='flex flex-col gap-2'>
				<h4 className='text-xl font-semibold font-serif text-zinc-100semibold'>
					{title}
				</h4>
				<p className='font-serif text-zinc-100'>{description}</p>
			</div>
		</div>
	);
};

export default FeatureCard;

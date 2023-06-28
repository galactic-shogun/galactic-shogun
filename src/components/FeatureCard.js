import React from 'react';
import Icon from '../icons/Icon';
import { motion } from 'framer-motion';

const FeatureCard = ({ icon, title, description, className }) => {
	return (
		<div className={`text-center ${className}`}>
			<motion.div
				initial={{ opacity: 0, scale: 0.5 }}
				whileInView={{ opacity: 1, scale: 1 }}
				transition={{
					duration: 0.3,
					delay: 0.2,
					ease: [0, 0.71, 0.2, 1.01],
					scale: {
						type: 'spring',
						damping: 5,
						stiffness: 100,
						restDelta: 0.001,
					},
				}}
				viewport={{ once: true }}
			>
				<Icon name={icon} className='h-24 mx-auto mb-10 text-zinc-100' />
			</motion.div>
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

import React from 'react';

const Section = ({ className, children }) => {
	return (
		<section className={`py-16 px-6 ${className}`}>
			<div className='md:max-w-lg md:mx-auto'>{children}</div>
		</section>
	);
};

export default Section;

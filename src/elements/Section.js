import React from 'react';

const Section = ({ className, children }) => {
	return (
		<section className={`py-16 px-6 ${className}`}>
			<div className='max-w-[300px] mx-auto'>{children}</div>
		</section>
	);
};

export default Section;

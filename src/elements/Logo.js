import React from 'react';

const Logo = ({ className }) => {
	return (
		<h1
			className={`text-4xl md:text-6xl font-bold leading-none text-center drop-shadow-[--logo-shadow] ${className}`}
		>
			GALACTIC<div>SHOGUN</div>
		</h1>
	);
};

export default Logo;

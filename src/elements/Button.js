import React from 'react';

const Button = ({ className, children, ...props }) => {
	return (
		<button
			className={`rounded-md p-2.5 bg-primary font-bold ${className}`}
			{...props}
		>
			{children}
		</button>
	);
};

export default Button;

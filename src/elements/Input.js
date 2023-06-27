import React from 'react';

const Input = ({ className, children, ...props }) => {
	return (
		<input
			className={`text-black rounded-md p-2.5 text-center ${className}`}
			{...props}
		>
			{children}
		</input>
	);
};

export default Input;

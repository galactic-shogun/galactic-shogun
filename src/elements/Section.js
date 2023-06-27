import React from 'react';

const Section = ({ className, children }) => {
	return <section className={`py-16 px-6 ${className}`}>{children}</section>;
};

export default Section;

import React from 'react';
import Hero from './components/Hero';
import Intro from './components/Intro';
import Features from './components/Features';
import About from './components/About';

const App = () => {
	return (
		<>
			<main>
				<Hero />
				<Intro />
				<Features />
				<About />
			</main>
		</>
	);
};

export default App;

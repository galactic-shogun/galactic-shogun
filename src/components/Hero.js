import { Canvas } from '@react-three/fiber';
import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import Logo from '../icons/Logo';
import SpaceWarp from './SpaceWarp';

const Hero = () => {
	const [show, setShow] = useState(false);

	useEffect(() => {
		const timer = setTimeout(() => {
			setShow(true);
		}, 2500);
		return () => clearTimeout(timer);
	}, []);

	return (
		<>
			<Canvas
				className='bg-black min-h-screen'
				style={{ position: 'absolute' }}
				camera={{
					fov: 100,
					near: 0.1,
					far: 200,
				}}
			>
				{process.env.NODE_ENV === 'production' && <SpaceWarp />}
			</Canvas>
			<section className='section min-h-screen flex flex-col justify-center items-center gap-16 relative z-0 bg-gradient-to-t from-background to-50%'>
				<motion.div layout transition={{ duration: 0.25 }}>
					<motion.div
						animate={{ opacity: 100 }}
						initial={{ opacity: 0 }}
						transition={{ duration: 0.5, delay: 1.25 }}
					>
						<Logo className='w-48 md:w-96' />
					</motion.div>
				</motion.div>
				<AnimatePresence>
					{show && (
						<motion.div
							layout
							animate={{ opacity: 100, y: 0 }}
							initial={{ opacity: 0, y: 100 }}
							className='flex flex-col gap-5 items-center'
						>
							<div className='flex flex-col gap-4 items-center text-center'>
								<h3 className='font-serif text-sm font-semibold'>
									KICKSTARTER LAUNCH FALL 2023
								</h3>
								<h2 className='section-title md:text-4xl text-primary'>
									Master the Cosmos with
									<div>Galactic Shogun</div>
								</h2>
								<p className='text-sm font-serif'>
									A new fast-paced and dynamic social deduction board game for
									4-8 players!
								</p>
							</div>
							<div className='flex flex-col gap-2 md:max-w-xs'>
								<input className='input' placeholder='First Name' />
								<input className='input' placeholder='Email Address' />
								<button className='button transform hover:scale-105'>
									GET NOTIFIED
								</button>
							</div>
						</motion.div>
					)}
				</AnimatePresence>
			</section>
		</>
	);
};

export default Hero;

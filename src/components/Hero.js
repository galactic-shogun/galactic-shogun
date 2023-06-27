import { Canvas } from '@react-three/fiber';
import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import Button from '../elements/Button';
import Input from '../elements/Input';
import Logo from '../elements/Logo';
import SectionTitle from '../elements/SectionTitle';
import SpaceWarp from './SpaceWarp';
import Section from '../elements/Section';

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
				<SpaceWarp />
			</Canvas>
			<Section className='min-h-screen flex flex-col justify-center items-center gap-16 relative z-10'>
				<motion.div layout transition={{ duration: 0.25 }}>
					<motion.div
						animate={{ opacity: 100 }}
						initial={{ opacity: 0 }}
						transition={{ duration: 0.5, delay: 1.25 }}
					>
						<Logo />
					</motion.div>
				</motion.div>
				<AnimatePresence>
					{show && (
						<motion.div
							layout
							animate={{ opacity: 100, y: 0 }}
							initial={{ opacity: 0, y: 100 }}
							className='flex flex-col gap-10 max-w-[300px]'
						>
							<div className='flex flex-col gap-4 text-center'>
								<SectionTitle>
									Master the Cosmos with Galactic Shogun
								</SectionTitle>
								<p className='text-sm font-serif'>
									Sign up now to receive exclusive updates and be the first to
									conquer the cosmos!
								</p>
							</div>
							<div className='flex flex-col gap-2'>
								<Input placeholder='Enter your email' />
								<Button>SUBSCRIBE</Button>
							</div>
						</motion.div>
					)}
				</AnimatePresence>
			</Section>
		</>
	);
};

export default Hero;

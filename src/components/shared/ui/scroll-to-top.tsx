'use client';

import { ChevronUpIcon } from '@radix-ui/react-icons';
import { useEffect, useState } from 'react';

const ScrollToTopButton = () => {
	const [shown, setShown] = useState(false);

	useEffect(() => {
		const scrollCallback = () => {
			const scrolledFromTop = window.scrollY;
			setShown(() => scrolledFromTop > 300);
		};

		window.addEventListener('scroll', scrollCallback);

		scrollCallback();

		return () => {
			window.removeEventListener('scroll', scrollCallback);
		};
	}, []);

	const scrolltoTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	return (
		<button
			aria-label='scroll to top'
			onClick={scrolltoTop}
			className={`${
				shown ? 'scale-100' : 'scale-0'
			} w-12 h-12 transition-transform duration-200 flex fixed right-10 bottom-10 dark:bg-neutral-950 bg-[#ededed] rounded-full justify-center items-center`}
		>
			<ChevronUpIcon className='size-6' />
		</button>
	);
};

export default ScrollToTopButton;

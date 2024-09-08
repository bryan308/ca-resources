'use client';

import { cn } from '@/lib/utils';
import { ChevronUpIcon } from '@radix-ui/react-icons';
import { useEffect, useRef, useState } from 'react';

const ScrollToTopButton = () => {
	const [shown, setShown] = useState(false);
	const hideTimeout = useRef<NodeJS.Timeout | null>(null);

	useEffect(() => {
		const scrollCallback = () => {
			const scrolledFromTop = window.scrollY;

			if (hideTimeout.current) clearTimeout(hideTimeout.current);

			if (scrolledFromTop > 300) {
				setShown(true);

				hideTimeout.current = setTimeout(() => {
					setShown(false);
				}, 5000);
			} else {
				setShown(false);
			}
		};

		window.addEventListener('scroll', scrollCallback);

		scrollCallback();

		return () => {
			window.removeEventListener('scroll', scrollCallback);
			if (hideTimeout.current) clearTimeout(hideTimeout.current);
		};
	}, []);

	const scrolltoTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	return (
		<button
			aria-label='scroll to top'
			title='scroll to top'
			onClick={scrolltoTop}
			className={cn(
				shown ? 'scale-100' : 'scale-0',
				'w-12 h-12 transition-transform duration-200 flex fixed right-6 xl:right-12 xl:bottom-8 bottom-32',
				'bg-card border-2 border-border-foreground rounded-full justify-center items-center'
			)}
		>
			<ChevronUpIcon className='size-6 text-secondary' />
		</button>
	);
};

export default ScrollToTopButton;

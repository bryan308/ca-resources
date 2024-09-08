import { Resource } from '@/lib/types';
import Link from 'next/link';
import React from 'react';
import ImageRender from './image-render';

interface CardsProps {
	data: Resource[];
}

const Cards: React.FC<CardsProps> = ({ data }) => {
	return (
		<>
			{data.map((d) => (
				<div
					key={d.name}
					className='flex items-center gap-4 py-4 px-6 rounded-md border border-border-foreground bg-card hover:ring-4 ring-neutral-100 dark:ring-neutral-950'
					title={d.name}
				>
					<div className='grid place-items-center min-w-14 size-14'>
						<ImageRender
							src={d.icon || '/logo.png'}
							alt={d.name}
							width={56}
							height={56}
							className={d.icon ? '' : 'grayscale'}
						/>
					</div>
					<div>
						<Link
							href={`${d.url}?rel=ca-resources.vercel.app`}
							className='link'
							target='_blank'
							rel='noopener noreferrer'
						>
							{d.name}
						</Link>
						<p className='text-secondary text-sm truncate-description'>{d.description}</p>
					</div>
				</div>
			))}
		</>
	);
};

export default Cards;

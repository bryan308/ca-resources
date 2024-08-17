import { Resource } from '@/lib/types';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface IData {
	data: Resource[];
}

function Cards({ data }: IData) {
	return (
		<>
			{data
				.sort(() => Math.random() - 0.5)
				.map((d) => (
					<div
						key={d.name}
						className='flex items-center gap-4 py-4 px-6 rounded-lg border primary-border bg-foreground'
					>
						<div className='grid place-items-center min-w-14 size-14'>
							{d.icon ? (
								<Image
									src={d.icon}
									alt={d.name}
									width={56}
									height={56}
								/>
							) : (
								<Image
									src='/logo.png'
									className='dark:grayscale'
									alt={d.name}
									width={56}
									height={56}
								/>
							)}
						</div>
						<div>
							<Link
								href={`${d.url}?rel=ca-resources.vercel.app`}
								className='text-blue-500 hover:underline font-semibold active:text-red-500 visited:text-purple-500'
								target='_blank'
								rel='noopener noreferrer'
							>
								{d.name}
							</Link>
							<p className='text-gray-600 text-sm truncate-description'>{d.description}</p>
						</div>
					</div>
				))}
		</>
	);
}

export default Cards;

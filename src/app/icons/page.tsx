import { icons } from '@/data/sources/icons';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function IconsPage() {
	return (
		<>
			<section>
				<h1>Icons</h1>
				<p className='text-xl text-200'>
					Discover a curated selection of icon libraries and resources to elevate your design
					projects.
				</p>
			</section>
			<section>
				<div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-10'>
					{icons
						.sort(() => Math.random() - 0.5)
						.map((icon) => (
							<div
								key={icon.name}
								className='flex items-center gap-4 py-4 px-6 rounded-lg border primary-border'
							>
								<div className='grid place-items-center min-w-14 size-14'>
									{icon.icon ? (
										<Image
											src={icon.icon}
											alt={icon.name}
											width={56}
											height={56}
										/>
									) : (
										<Image
											src='/logo.png'
											className='dark:grayscale'
											alt={icon.name}
											width={56}
											height={56}
										/>
									)}
								</div>
								<div>
									<Link
										href={`${icon.url}?rel=ca-resources.vercel.app`}
										className='text-blue-500 hover:underline font-semibold'
										target='_blank'
										rel='noopener noreferrer'
									>
										{icon.name}
									</Link>
									<p className='text-gray-600 text-sm truncate-description'>{icon.description}</p>
								</div>
							</div>
						))}
				</div>
			</section>
		</>
	);
}

export default IconsPage;

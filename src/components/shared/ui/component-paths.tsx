'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { MDXFrontMatter } from '@/lib/types';

interface PathsProp {
	paths: MDXFrontMatter[];
}

function ComponentPaths({ paths }: PathsProp) {
	const pathname = usePathname();

	const currentPath = (isActive: boolean): string =>
		isActive ? 'text-100 bg-neutral-200/30 dark:bg-neutral-800/50' : 'text-200';

	return (
		<>
			{paths.map((p, i) => {
				const isActive = pathname === p.slug;

				return (
					<li key={i}>
						<Link
							href={p.slug}
							className={currentPath(isActive)}
						>
							{p.title}
						</Link>
					</li>
				);
			})}
		</>
	);
}

export default ComponentPaths;

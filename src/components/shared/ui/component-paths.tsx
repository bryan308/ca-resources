'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MDXFrontMatter } from '@/lib/types';

interface PathsProp {
	paths: MDXFrontMatter[];
}

function ComponentPaths({ paths }: PathsProp) {
	const pathname = usePathname();

	const currentPath = (isActive: boolean): string =>
		isActive ? 'text-primary bg-neutral-200/30 dark:bg-neutral-950' : 'text-secondary';

	return (
		<>
			{paths
				.sort((a, b) => a.title.localeCompare(b.title))
				.map((p, i) => {
					const isActive = pathname === `/guides/${p.slug}`;
					return (
						<li key={i}>
							<Link
								href={`/guides/${p.slug}`}
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

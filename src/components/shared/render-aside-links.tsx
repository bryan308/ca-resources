'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

interface IAsideLinks {
	data: {
		text: string;
		path: string;
	}[];
}

function AsideLinks({ data }: IAsideLinks) {
	const pathname = usePathname();

	const currentPath = (isActive: boolean): string =>
		isActive ? 'text-foreground bg-neutral-200/30 dark:bg-neutral-950' : 'text-muted-foreground';

	return (
		<>
			{data
				.sort((a, b) => a.text.localeCompare(b.text))
				.map((d, i) => {
					const isActive = pathname === d.path;
					return (
						<li key={i}>
							<Link
								href={d.path}
								className={currentPath(isActive)}
							>
								{d.text}
							</Link>
						</li>
					);
				})}
		</>
	);
}

export default AsideLinks;

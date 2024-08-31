'use client';

import { MDXRemote } from 'next-mdx-remote';
import { MDXFrontMatter } from '@/lib/types';
import { components } from '@/components/shared/ui/MDX';
import Pagination from '@/components/shared/ui/pagination';

interface IGuideContentProp {
	mdxContent: any;
	previous: MDXFrontMatter | null;
	next: MDXFrontMatter | null;
}

export default function Content({ mdxContent, previous, next }: IGuideContentProp) {
	return (
		<>
			<MDXRemote
				{...mdxContent}
				components={components}
			/>
			<Pagination
				previous={previous}
				next={next}
			/>
		</>
	);
}

'use client';

import { MDXRemote } from 'next-mdx-remote';
import { MDXFrontMatter } from '@/lib/types';
import { components } from '@/components/shared/ui/MDX';

interface IGuideContentProp {
	mdxContent: any;
	next: MDXFrontMatter | null;
}

export default function Content({ mdxContent, next }: IGuideContentProp) {
	return (
		<>
			<MDXRemote
				{...mdxContent}
				components={components}
			/>
		</>
	);
}

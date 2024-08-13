'use client';

import { MDXRemote } from 'next-mdx-remote';
import { MDXFrontMatter } from '@/lib/types';
import { components } from '@/components/shared/MDX';
// import '@/components/courses/styles/mdx.css';

interface ILessonContentProp {
	mdxContent: any;
	next: MDXFrontMatter | null;
}

export default function Content({ mdxContent, next }: ILessonContentProp) {
	return (
		<>
			<MDXRemote
				{...mdxContent}
				components={components}
			/>
			<hr className='opacity-25' />
			{/* <BottomNav next={next} /> */}
		</>
	);
}

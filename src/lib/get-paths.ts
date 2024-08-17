import { getAllMdx } from '@/lib/mdx';
import type { MDXFrontMatter } from './types';

export function getAllPaths(): { slug: string; title: string }[] {
	const mdxFiles = getAllMdx();

	return mdxFiles.map(({ frontMatter }) => ({
		slug: frontMatter.slug,
		title: frontMatter.title,
	}));
}

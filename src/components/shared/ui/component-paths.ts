import { MDXFrontMatter } from '@/lib/types';

interface PathsProp {
	paths: MDXFrontMatter[];
}

export function ComponentPaths({ paths }: PathsProp) {
	return paths;
}

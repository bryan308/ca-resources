import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import type { MDXFrontMatter } from '@/lib/types';

const root = process.cwd();
export const lessonsPath = path.join(root, 'components-page');

export const getMdx = (fileName: string) => {
	try {
		const fullPath = path.join(lessonsPath, fileName);
		const docSource = fs.readFileSync(fullPath, 'utf-8');
		const { data, content } = matter(docSource);

		return {
			frontMatter: {
				...data,
				slug: fileName.replace('.mdx', ''),
			} as MDXFrontMatter,
			content,
		};
	} catch (error) {
		console.error(`Error reading MDX file ${fileName}:`, error);
		return null;
	}
};

export const getAllMdx = () => {
	try {
		const fileNames = fs.readdirSync(lessonsPath);
		const items = fileNames.map((fileName) => getMdx(fileName)).filter(Boolean);
		return items as { frontMatter: MDXFrontMatter; content: string }[];
	} catch (error) {
		console.error('Error reading MDX files:', error);
		return [];
	}
};

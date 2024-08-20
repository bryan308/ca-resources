import remarkGfm from 'remark-gfm';
import { getAllMdx } from '@/lib/mdx';
import { notFound } from 'next/navigation';
import rehypePrism from 'rehype-prism-plus';
import { serialize } from 'next-mdx-remote/serialize';
import Content from './slug-content';
import './styles/slug.css';

export async function generateMetadata({ params }: ListProp) {
	const { slug } = params;
	const postData = await fetchGuideData(slug);

	return {
		title: `${postData.frontMatter.title}`,
		description: postData.frontMatter.description || '',
		openGraph: {
			title: `${postData.frontMatter.title}`,
			description: postData.frontMatter.description || '',
			images: [``],
		},
	};
}

interface ListProp {
	params: { slug: string };
}

async function fetchGuideData(slug: string) {
	const mdxFiles = getAllMdx();

	const sortedGuides = mdxFiles.sort((a, b) => {
		if (a.frontMatter.guideGroup === b.frontMatter.guideGroup) {
			return a.frontMatter.guideNumber - b.frontMatter.guideNumber;
		}
		return a.frontMatter.guideGroup - b.frontMatter.guideGroup;
	});

	const guideIndex = sortedGuides.findIndex((p) => p.frontMatter.slug === slug);
	if (guideIndex === -1) {
		notFound();
	}

	const guide = sortedGuides[guideIndex];
	const { frontMatter, content } = guide;

	const mdxContent = await serialize(content, {
		mdxOptions: {
			remarkPlugins: [remarkGfm],
			rehypePlugins: [rehypePrism],
		},
		scope: frontMatter,
	});

	const next = sortedGuides[guideIndex + 1]?.frontMatter || null;

	return { frontMatter, mdxContent, next };
}

export default async function Guide({ params }: ListProp) {
	const { slug } = params;
	const postData = await fetchGuideData(slug);

	return (
		<>
			<Content {...postData} />
		</>
	);
}

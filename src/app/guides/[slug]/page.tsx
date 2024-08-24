import remarkGfm from 'remark-gfm';
import { getAllMdx } from '@/lib/mdx';
import { notFound } from 'next/navigation';
import rehypePrism from 'rehype-prism-plus';
import { serialize } from 'next-mdx-remote/serialize';
import Content from './slug-content';
import './style/slug.css';
import { siteMetadata as meta } from '@/data/siteConfig';

export async function generateMetadata({ params }: ListProp) {
	const { slug } = params;
	const postData = await fetchGuideData(slug);

	return {
		title: postData.frontMatter.title,
		description: postData.frontMatter.description,
		openGraph: {
			title: postData.frontMatter.title,
			description: postData.frontMatter.description,
			url: `${meta.url}/${slug}`,
			images: [
				{
					url: `${meta.url}${meta.banner}`,
					alt: postData.frontMatter.title,
				},
			],
		},
		twitter: {
			card: 'summary_large_image',
			title: postData.frontMatter.title,
			description: postData.frontMatter.description,
			url: `${meta.url}/${slug}`,
			images: [
				{
					url: `${meta.url}${meta.banner}`,
					alt: postData.frontMatter.title,
				},
			],
		},
	};
}

interface ListProp {
	params: { slug: string };
}

async function fetchGuideData(slug: string) {
	const mdxFiles = getAllMdx();

	const sortedGuides = mdxFiles.sort(
		(a, b) => a.frontMatter.guideNumber - b.frontMatter.guideNumber
	);

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

	const previous = sortedGuides[guideIndex - 1]?.frontMatter || null;
	const next = sortedGuides[guideIndex + 1]?.frontMatter || null;

	return { frontMatter, mdxContent, previous, next };
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

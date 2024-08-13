import remarkGfm from 'remark-gfm';
import { getAllMdx } from '@/lib/mdx';
import { notFound } from 'next/navigation';
import rehypePrism from 'rehype-prism-plus';
import { serialize } from 'next-mdx-remote/serialize';
import Content from './slug-content';

export async function generateMetadata({ params }: ListProp) {
	const { slug } = params;
	const postData = await fetchLessonData(slug);

	return {
		title: `${postData.frontMatter.title}`,
		description: postData.frontMatter.extendedDesc || 'Learn more about web development.',
		openGraph: {
			title: `${postData.frontMatter.title} | WebWise`,
			description: postData.frontMatter.description || 'Learn more about web development.',
			images: [`https://webwisee.vercel.app/images/landing-page.jpg`],
		},
	};
}

interface ListProp {
	params: { slug: string };
}

async function fetchLessonData(slug: string) {
	const mdxFiles = getAllMdx();

	const sortedLessons = mdxFiles.sort((a, b) => {
		if (a.frontMatter.lessonGroup === b.frontMatter.lessonGroup) {
			return a.frontMatter.lessonNumber - b.frontMatter.lessonNumber;
		}
		return a.frontMatter.lessonGroup - b.frontMatter.lessonGroup;
	});

	const lessonIndex = sortedLessons.findIndex((p) => p.frontMatter.slug === slug);
	if (lessonIndex === -1) {
		notFound();
	}

	const lesson = sortedLessons[lessonIndex];
	const { frontMatter, content } = lesson;

	const mdxContent = await serialize(content, {
		mdxOptions: {
			remarkPlugins: [remarkGfm],
			rehypePlugins: [rehypePrism],
		},
		scope: frontMatter,
	});

	const next = sortedLessons[lessonIndex + 1]?.frontMatter || null;

	return { frontMatter, mdxContent, next };
}

export default async function Lesson({ params }: ListProp) {
	const { slug } = params;
	const postData = await fetchLessonData(slug);

	return (
		<>
			<Content {...postData} />
		</>
	);
}

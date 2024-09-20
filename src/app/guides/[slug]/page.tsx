import "./slug.css"

import { allGuides } from "contentlayer/generated"
import { useMDXComponent } from "next-contentlayer2/hooks"
import { notFound } from "next/navigation"
import { components } from "@/components/shared/mdx-components"
import Pagination from "@/components/shared/pagination"

import { siteMetadata as meta } from "@/data/site-config"

export async function generateMetadata({ params }: { params: { slug: string } }) {
	const { slug } = params

	const guideData = allGuides.find((guide) => guide._raw.flattenedPath === slug)

	if (!guideData) {
		return {
			title: "Guide not found",
			description: "This guide does not exist.",
		}
	}

	return {
		title: guideData.title,
		description: guideData.description,
		openGraph: {
			title: guideData.title,
			description: guideData.description,
			url: `${meta.url}/guides/${slug}`,
			images: [
				{
					url: `${meta.url}/${guideData.thumbnail}`,
					alt: guideData.title,
				},
			],
		},
		twitter: {
			card: "summary_large_image",
			title: guideData.title,
			description: guideData.description,
			url: `${meta.url}/guides/${slug}`,
			images: [
				{
					url: `${meta.url}/${guideData.thumbnail}`,
					alt: guideData.title,
				},
			],
		},
	}
}

export const generateStaticParams = async () => {
	const posts = allGuides
	return posts.map((guide) => ({ slug: guide._raw.flattenedPath }))
}

export default async function Page({ params }: { params: { slug: string } }) {
	const sortedPosts = allGuides.sort((a, b) =>
		a._raw.flattenedPath.localeCompare(b._raw.flattenedPath)
	)

	// Fetch the post based on the current slug
	const postIndex = sortedPosts.findIndex((guide) => guide._raw.flattenedPath === params.slug)
	const guide = sortedPosts[postIndex]

	// Filter guides based on the category from the slug
	const currentCategory = guide.category // Assuming the slug matches category (html/javascript)
	const guidesInCategory = allGuides.filter((g) => g.category === currentCategory)

	const MDXContent = useMDXComponent(guide?.body?.code || "")

	if (!guide) return notFound()

	// For pagination, we need to look at the guides in the same category
	const guideIndex = guidesInCategory.findIndex((g) => g._raw.flattenedPath === params.slug)
	const prev = guidesInCategory[guideIndex - 1] || null
	const next = guidesInCategory[guideIndex + 1] || null

	return (
		<>
			{MDXContent && (
				<MDXContent
					code={guide.body.code}
					components={components}
				/>
			)}
			<Pagination
				previous={prev ? { title: prev.title, path: prev._raw.flattenedPath } : null}
				next={next ? { title: next.title, path: next._raw.flattenedPath } : null}
			/>
		</>
	)
}

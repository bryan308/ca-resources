import "./slug.css"

import { allPosts } from "content-collections"
import { MDXContent } from "@content-collections/mdx/react"
import { notFound } from "next/navigation"
import { components } from "@/components/shared/mdx-components"
import Pagination from "@/components/shared/pagination"

import { siteMetadata as meta } from "@/data/site-config"

export async function generateMetadata({ params }: { params: { slug: string } }) {
	const { slug } = params

	const postData = allPosts.find((post) => post._meta.path === slug)

	if (!postData) {
		return {
			title: "Post not found",
			description: "This post does not exist.",
		}
	}

	return {
		title: postData.title,
		description: postData.description,
		openGraph: {
			title: postData.title,
			description: postData.description,
			url: `${meta.url}/guides/${slug}`,
			images: [
				{
					url: `${meta.url}/${postData.thumbnail}`,
					alt: postData.title,
				},
			],
		},
		twitter: {
			card: "summary_large_image",
			title: postData.title,
			description: postData.description,
			url: `${meta.url}/guides/${slug}`,
			images: [
				{
					url: `${meta.url}/${postData.thumbnail}`,
					alt: postData.title,
				},
			],
		},
	}
}

export const generateStaticParams = async () => {
	const posts = allPosts
	return posts.map((post) => ({ slug: post._meta.path }))
}

export default async function Page({ params }: { params: { slug: string } }) {
	const sortedPosts = allPosts.sort((a, b) => {
		return a._meta.fileName.localeCompare(b._meta.fileName)
	})

	const currentPostIndex = sortedPosts.findIndex((post) => post._meta.path === params.slug)
	const post = sortedPosts[currentPostIndex]

	if (!post) notFound()

	const previousPost = sortedPosts[currentPostIndex - 1] || null
	const nextPost = sortedPosts[currentPostIndex + 1] || null

	return (
		<>
			<MDXContent
				style={{ scroll: "smooth" }}
				code={post.mdx}
				components={components}
			/>
			<Pagination
				previous={
					previousPost ? { title: previousPost.title, path: previousPost._meta.path } : null
				}
				next={nextPost ? { title: nextPost.title, path: nextPost._meta.path } : null}
			/>
		</>
	)
}

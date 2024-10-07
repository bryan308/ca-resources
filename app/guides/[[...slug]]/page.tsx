import "./style.css"

import type { Metadata } from "next"

import { guides } from "@/app/source"

import { DocsPage, DocsBody, DocsTitle, DocsDescription } from "fumadocs-ui/page"
import { notFound } from "next/navigation"
import { MDXContent } from "@content-collections/mdx/react"
import { components } from "@/components/shared/mdx-components"

import { TableOfContents } from "fumadocs-core/server"

export default function Page({ params }: { params: { slug?: string[] } }) {
	const page = guides.getPage(params.slug)
	if (!page) notFound()

	// * Transform `page.data.toc` to match `TableOfContents` type, including the `depth` property
	const toc: TableOfContents = page.data.toc.map((item: any) => ({
		title: item.title || item, // Adjust this based on your data structure
		url: item.url || `/guides/${item.slug}`, // Adjust to the correct URL structure
		depth: item.depth || 1, // You can dynamically set this or default it to `1`
	}))

	return (
		<DocsPage
			tableOfContent={{
				style: "clerk",
				single: false,
			}}
			editOnGithub={{
				repo: "ca-resources",
				owner: "bryan308",
				sha: "v2/stable",
				path: `content/guides/${page.file.flattenedPath}.mdx`,
			}}
			toc={toc}
			// full={page.data.full}
		>
			<DocsTitle>{page.data.title}</DocsTitle>
			<DocsDescription>{page.data.description}</DocsDescription>
			<DocsBody>
				<MDXContent
					code={page.data.body}
					components={components}
				/>
			</DocsBody>
		</DocsPage>
	)
}

export function generateStaticParams() {
	return guides.generateParams()
}

export function generateMetadata({ params }: { params: { slug?: string[] } }) {
	const page = guides.getPage(params.slug)
	if (!page) notFound()

	return {
		title: page.data.title,
		description: page.data.description,
	} satisfies Metadata
}

import type { Metadata } from "next"

import { resources } from "@/app/source"

import { DocsPage, DocsBody, DocsTitle, DocsDescription } from "fumadocs-ui/page"
import { notFound } from "next/navigation"
import { MDXContent } from "@content-collections/mdx/react"
import { components } from "@/components/shared/mdx-components"

import { TableOfContents } from "fumadocs-core/server"
import { getImageMeta } from "fumadocs-ui/og"

export default function Page({ params }: { params: { slug?: string[] } }) {
	const page = resources.getPage(params.slug)
	if (!page) notFound()

	const toc: TableOfContents = page.data.toc.map((item: any) => ({
		title: item.title || item,
		url: item.url || `/guides/${item.slug}`,
		depth: item.depth || 1,
	}))

	return (
		<DocsPage
			tableOfContent={{
				style: "clerk",
				single: false,
			}}
			toc={toc}
			editOnGithub={{
				repo: "ca-resources",
				owner: "bryan308",
				sha: "v2/stable",
				path: `content/resources/${page.file.flattenedPath}.mdx`,
			}}
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
	return resources.generateParams()
}

export function generateMetadata({ params }: { params: { slug?: string[] } }) {
	const page = resources.getPage(params.slug)
	if (!page) notFound()

	const image = getImageMeta("og", page.slugs)

	return {
		title: page.data.title,
		description: page.data.description,
		openGraph: {
			title: page.data.title,
			url: "https://ca-resources.vercel.app/resources",
			description: page.data.description,
			images: image,
			siteName: "CA Resources | Resources",
		},
		twitter: {
			card: "summary_large_image",
			title: page.data.title,
			description: page.data.description,
			images: image,
		},
	} satisfies Metadata
}

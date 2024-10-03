import type { Metadata } from "next"

import { resources } from "@/app/source"

import { DocsPage, DocsBody, DocsTitle, DocsDescription } from "fumadocs-ui/page"
import { notFound } from "next/navigation"
import { MDXContent } from "@content-collections/mdx/react"

import defaultMdxComponents from "fumadocs-ui/mdx"

export default function Page({ params }: { params: { slug?: string[] } }) {
	const page = resources.getPage(params.slug)
	if (!page) notFound()

	return (
		<DocsPage
			toc={page.data.toc}
			full={page.data.full}
		>
			<DocsTitle>{page.data.title}</DocsTitle>
			<DocsDescription>{page.data.description}</DocsDescription>
			<DocsBody>
				<MDXContent
					code={page.data.body}
					components={{ ...defaultMdxComponents }}
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

	return {
		title: page.data.title,
		description: page.data.description,
	} satisfies Metadata
}

import { resources } from "@/lib/source"
import type { Metadata } from "next"
import { DocsPage, DocsBody, DocsTitle, DocsDescription } from "fumadocs-ui/page"
import { notFound } from "next/navigation"
import { MDXContent } from "@content-collections/mdx/react"
import { components } from "@/components/shared/mdx-components"
import { getGithubLastEdit } from "fumadocs-core/server"

export default async function Page(props: { params: Promise<{ slug?: string[] }> }) {
	const params = await props.params
	const page = resources.getPage(params.slug)
	if (!page) notFound()

	const time = await getGithubLastEdit({
		owner: "bryan308",
		repo: "ca-resources",
		token: `Bearer ${process.env.GITHUB_TOKEN}`,
		sha: "main",
		path: `content/resources/${page.file.flattenedPath}.mdx`,
	})

	return (
		<DocsPage
			lastUpdate={time ? new Date(time) : new Date()}
			tableOfContent={{
				style: "clerk",
				single: false,
			}}
			editOnGithub={{
				repo: "ca-resources",
				owner: "bryan308",
				sha: "main",
				path: `content/resources/${page.file.flattenedPath}.mdx`,
			}}
			toc={page.data.toc}
			full={page.data.full}
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

export async function generateMetadata(props: { params: Promise<{ slug?: string[] }> }) {
	const params = await props.params
	const page = resources.getPage(params.slug)
	if (!page) notFound()

	return {
		title: page.data.title,
		description: page.data.description,
	} satisfies Metadata
}

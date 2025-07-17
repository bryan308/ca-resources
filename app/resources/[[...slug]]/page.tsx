import { resourcesSource } from "@/lib/source"
import { DocsPage, DocsBody, DocsTitle, DocsDescription } from "fumadocs-ui/page"
import { notFound } from "next/navigation"
import { components } from "@/components/shared/mdx-components"
import { getGithubLastEdit } from "fumadocs-core/server"
import { resourcesMetadataImage } from "@/lib/metadata"

export default async function Page(props: { params: Promise<{ slug?: string[] }> }) {
	const params = await props.params
	const page = resourcesSource.getPage(params.slug)
	if (!page) notFound()

	const path = `content/resources/${page.file.flattenedPath}.mdx`

	const time =
		process.env.NODE_ENV === "development"
			? null
			: await getGithubLastEdit({
					owner: "bryan308",
					repo: "ca-resources",
					token: `Bearer ${process.env.GITHUB_TOKEN}`,
					sha: "main",
					path: path,
			  })

	const MDXContent = page.data.body;

	return (
		<DocsPage
			lastUpdate={time || undefined}
			tableOfContent={{
				style: "clerk",
				single: false,
			}}
			editOnGithub={{
				owner: "bryan308",
				repo: "ca-resources",
				sha: "main",
				path: path,
			}}
			toc={page.data.toc}
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
	return resourcesSource.generateParams()
}

export async function generateMetadata(props: { params: Promise<{ slug?: string[] }> }) {
	const params = await props.params
	const page = resourcesSource.getPage(params.slug)
	if (!page) notFound()

	return resourcesMetadataImage.withImage(page.slugs, {
		title: page.data.title,
		description: page.data.description,
	})
}

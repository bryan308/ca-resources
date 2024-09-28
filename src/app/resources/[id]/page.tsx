import { resourcesData, ResourceType } from "@/data/sources/resources"
import { siteMetadata as meta } from "@/data/site-config"
import { Metadata } from "next"
import { notFound } from "next/navigation"
import { format, parseISO } from "date-fns"

import Cards from "@/components/shared/cards"
import PageHeader from "@/components/shared/page-header"
import Pagination from "@/components/shared/pagination"

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
	const { id } = params

	if (!resourcesData[id as keyof typeof resourcesData]) {
		return {
			title: "Not Found",
			description: "Resource not found.",
		}
	}

	const resourceData = resourcesData[id as keyof typeof resourcesData]

	const imageUrl = meta.url ? `${meta.url}/${resourceData.thumbnail}` : resourceData.thumbnail

	return {
		title: resourceData.title,
		description: resourceData.subtitle,
		openGraph: {
			title: resourceData.title,
			description: resourceData.subtitle,
			url: imageUrl,
			images: [
				{
					url: imageUrl,
					alt: resourceData.title,
				},
			],
		},
		twitter: {
			card: "summary_large_image",
			site: meta.url,
			creator: meta.socials.x.username,
			description: resourceData.subtitle,
			title: resourceData.title,
			images: [
				{
					url: imageUrl,
					alt: resourceData.title,
				},
			],
		},
	}
}

export function generateStaticParams() {
	const resourceKeys = Object.keys(resourcesData) as ResourceType[]

	return resourceKeys.map((id) => ({ id }))
}

export default function ResourcePage({ params }: { params: { id: string } }) {
	const { id } = params

	if (!Object.keys(resourcesData).includes(id)) {
		return notFound()
	}

	const resourceKeys = Object.keys(resourcesData).sort() // * Sort keys alphabetically
	const currentIndex = resourceKeys.indexOf(id) // * Find current index
	const resourceData = resourcesData[id as ResourceType]

	const prevKey = currentIndex > 0 ? resourceKeys[currentIndex - 1] : null
	const nextKey = currentIndex < resourceKeys.length - 1 ? resourceKeys[currentIndex + 1] : null

	const prev = prevKey && resourcesData[prevKey]
	const next = nextKey && resourcesData[nextKey]

	return (
		<>
			<section>
				<PageHeader>{resourceData.title}</PageHeader>
				<p className="text-xl">{resourceData.subtitle}</p>
				{resourceData.lastUpdated && (
					<p className="text-muted-foreground text-sm">
						Last updated on {format(parseISO(resourceData.lastUpdated), "MMMM d, yyyy")}
					</p>
				)}
			</section>
			{resourceData.resourcesList.map((rl) => (
				<section key={rl.title}>
					{rl.title && <h2>{rl.title}</h2>}
					<div className={`grid grid-cols-1 md:grid-cols-2 gap-4 ${rl.title && "mt-10"}`}>
						<Cards data={rl.links} />
					</div>
				</section>
			))}
			<Pagination
				page="resources"
				previous={prev ? { title: prev.title, path: prevKey } : null}
				next={next ? { title: next.title, path: nextKey } : null}
			/>
		</>
	)
}

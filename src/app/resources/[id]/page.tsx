import { resourcesData, ResourceType } from "@/data/sources/resources"
import { siteMetadata as meta } from "@/data/site-config"
import { Metadata } from "next"
import { notFound } from "next/navigation"

import Cards from "@/components/shared/cards"
import PageHeader from "@/components/shared/page-header"

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
	const { id } = params
	if (!Object.keys(resourcesData).includes(id)) {
		return { title: "Not Found", description: "Resource not found." }
	}

	const resourceData = resourcesData[id as ResourceType]
	return {
		title: resourceData.title,
		description: resourceData.subtitle,
		openGraph: {
			title: resourceData.title,
			description: resourceData.subtitle,
			url: `${meta.url}/${resourceData.thumbnail}`,
			images: [
				{
					url: `${meta.url}/${resourceData.thumbnail}`,
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

	const resourceData = resourcesData[id as ResourceType]

	return (
		<>
			<section>
				<PageHeader>{resourceData.title}</PageHeader>
				<p className="text-xl">{resourceData.subtitle}</p>
			</section>
			{resourceData.resourcesList.map((rl) => (
				<section key={rl.title}>
					{rl.title && (
						<>
							<h2>{rl.title}</h2>
							{/* <p>{rl.subheader}</p> */}
						</>
					)}
					<div className={`grid grid-cols-1 md:grid-cols-2 gap-4 ${rl.title && "mt-10"}`}>
						<Cards data={rl.links} />
					</div>
				</section>
			))}
		</>
	)
}

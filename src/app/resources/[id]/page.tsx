import { Metadata } from "next"
import { notFound } from "next/navigation"

import Cards from "@/components/shared/cards"
import PageHeader from "@/components/shared/page-header"

import { resourcesData, ResourceType } from "@/data/sources/resources"
import { siteMetadata as meta } from "@/data/site-config"

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
			{resourceData.contentSections.map((section, index) => (
				<section key={index}>
					{section.title && (
						<>
							<h2>{section.title}</h2>
							{/* <p>{section.subheader}</p> */}
						</>
					)}
					<div className={`grid grid-cols-1 md:grid-cols-2 gap-4 ${section.title && "mt-10"}`}>
						<Cards data={section.resources} />
					</div>
				</section>
			))}
		</>
	)
}

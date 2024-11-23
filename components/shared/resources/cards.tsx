import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { resourcesData } from "@/data/resources"
import { AlertCircle, Box } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import React from "react"

// * Function to shuffle an array
const shuffleArray = <T,>(array: T[]): T[] => {
	return array
		.map((value) => ({ value, sort: Math.random() })) // Assign random sort values
		.sort((a, b) => a.sort - b.sort) // Sort based on the random values
		.map(({ value }) => value) // Extract original values in shuffled order
}

interface ResourcesCardsProps {
	type?: keyof typeof resourcesData // ! Make type optional
}

export const ResourcesCards: React.FC<ResourcesCardsProps> = ({ type }) => {
	let resourcesList: {
		title?: string
		links: { title: string; description: string; url: string; iconPath?: string }[]
	}[] = []

	// If a type is provided, check if it exists in resourcesData
	if (type && resourcesData[type]) {
		// Shuffle the resources list within this category (type provided)
		resourcesList = shuffleArray(resourcesData[type].resourcesList)
	} else {
		// If no type is provided, gather resources from all categories
		for (const key of Object.keys(resourcesData) as Array<keyof typeof resourcesData>) {
			resourcesList.push(...resourcesData[key].resourcesList)
		}

		// Flatten and shuffle the combined list randomly (for all resources)
		resourcesList = [
			{
				title: "",
				links: shuffleArray(resourcesList.flatMap((resource) => resource.links)),
			},
		]
	}

	if (resourcesList.length === 0) {
		return (
			<Alert variant="destructive">
				<AlertCircle className="h-4 w-4" />
				<AlertTitle>Error</AlertTitle>
				<AlertDescription>Opps... No resources found 😢</AlertDescription>
			</Alert>
		)
	}

	return (
		<div className={`mt-4`}>
			{resourcesList.map((resource, index) => (
				<section
					key={index}
					className={`mt-6`}
				>
					{resource.title && <h3 className="text-xl font-semibold">{resource.title}</h3>}
					<div className={`grid grid-cols-1 md:grid-cols-2 gap-4 mt-2`}>
						{shuffleArray(resource.links).map((link, idx) => (
							<Card
								key={idx}
								title={link.title}
								description={link.description}
								href={link.url}
								icon={link.iconPath}
							/>
						))}
					</div>
				</section>
			))}
		</div>
	)
}

export const Card = ({
	title,
	description,
	href,
	icon,
}: {
	title: string
	description: string
	href: string
	icon?: string
}) => {
	return (
		<Link
			className="not-prose block rounded-lg border bg-fd-card p-4 text-sm text-fd-card-foreground shadow-md transition-colors hover:bg-fd-accent/80"
			href={`${href}?ref=ca-resources.vercel.app`}
			title={title}
			target="_blank"
			rel="noopener noreferrer"
		>
			<div className="flex items-center gap-2 mb-2">
				{icon ? (
					<Image
						src={icon}
						alt={title}
						width={24}
						height={24}
						className="min-w-6 size-6"
					/>
				) : (
					<Box className="min-w-6 size-6" />
				)}
				<h3 className="font-medium text-lg">{title}</h3>
			</div>
			<p className="text-fd-muted-foreground truncate-text">{description}</p>
		</Link>
	)
}

// ! saka na i-improve and code basta gumagana muna

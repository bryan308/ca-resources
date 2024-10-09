import { type NextRequest } from "next/server"
import { notFound } from "next/navigation"
import { generateOGImage } from "fumadocs-ui/og"
import { resources, guides } from "@/app/source"

export function GET(_: NextRequest, { params }: { params: { slug: string[] } }) {
	let page = resources.getPage(params.slug.slice(0, -1)) || guides.getPage(params.slug.slice(0, -1))
	if (!page) notFound()

	return generateOGImage({
		primaryTextColor: "#fff",
		primaryColor: "#10233D",
		title: page.data.title,
		icon: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="80"
				height="80"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
			>
				<path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
				<path d="m3.3 7 8.7 5 8.7-5" />
				<path d="M12 22V12" />
			</svg>
		),
		description: page.data.description,
		site: "CA Resources",
	})
}

export function generateStaticParams() {
	const resourceParams = resources.generateParams().map((params) => ({
		...params,
		slug: [...params.slug, "og.png"],
	}))

	const guideParams = guides.generateParams().map((params) => ({
		...params,
		slug: [...params.slug, "og.png"],
	}))

	return [...resourceParams, ...guideParams]
}

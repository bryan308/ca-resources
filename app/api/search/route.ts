import { resourcesSource, guidesSource } from "@/lib/source"
import { createSearchAPI } from "fumadocs-core/search/server"

export const { GET } = createSearchAPI("advanced", {
	indexes: [
		...resourcesSource.getPages().map((page) => ({
			title: page.data.title,
			description: page.data.description,
			url: page.url,
			id: page.url,
			structuredData: page.data.structuredData,
			tag: "Resources",
		})),
		...guidesSource.getPages().map((page) => ({
			title: page.data.title,
			description: page.data.description,
			url: page.url,
			id: page.url,
			structuredData: page.data.structuredData,
			tag: "Guides",
		})),
	],
})

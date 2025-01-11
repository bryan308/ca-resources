import { guides, resources } from "@/lib/source"
import { createSearchAPI } from "fumadocs-core/search/server"

export const { GET } = createSearchAPI("advanced", {
	indexes: [
		...guides.getPages().map((page) => ({
			title: page.data.title,
			description: page.data.description,
			url: page.url,
			id: page.url,
			structuredData: page.data.structuredData,
			tag: "guides",
		})),
		...resources.getPages().map((page) => ({
			title: page.data.title,
			description: page.data.description,
			url: page.url,
			id: page.url,
			structuredData: page.data.structuredData,
			tag: "resources",
		})),
	],
})

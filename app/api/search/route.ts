import { guides } from "@/app/source"
// import { resourcesData } from "@/data/resources"
import { createSearchAPI } from "fumadocs-core/search/server"

export const { GET } = createSearchAPI("advanced", {
	indexes: guides.getPages().map((page) => ({
		title: page.data.title,
		structuredData: page.data.structuredData,
		id: page.url,
		url: page.url,
	})),
})

// TODO include resources in search
// const resourcePages = Object.keys(resourcesData).flatMap((key) =>
// 	resourcesData[key].resourcesList.map((resource) => ({
// 		title: resource.title,
// 		structuredData: resource.structuredData,
// 		id: resource.title.toLowerCase().replace(/\s+/g, "-"),
// 		url: resource.links.map((link) => link.url).join(","),
// 	}))
// )

// export const { GET } = createSearchAPI("advanced", {
// 	indexes: [
// 		...guides.getPages().map((page) => ({
// 			title: page.data.title,
// 			structuredData: page.data.structuredData, // Guides have structuredData
// 			id: page.url,
// 			url: page.url,
// 		})),
// 		...resourcePages.map((resource) => ({
// 			title: resource.title,
// 			structuredData: resource.structuredData, // Resources now have structuredData
// 			id: resource.id,
// 			url: resource.url,
// 		})),
// 	],
// })

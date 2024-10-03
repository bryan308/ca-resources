import { allDocs, allGuides, allMetas, allResources } from "content-collections"
import { loader } from "fumadocs-core/source"
import { createMDXSource } from "@fumadocs/content-collections"

export const source = loader({
	baseUrl: "/docs",
	source: createMDXSource(allDocs, allMetas),
})

export const resources = loader({
	baseUrl: "/resources",
	source: createMDXSource(allResources, []),
})

export const guides = loader({
	baseUrl: "/guides",
	source: createMDXSource(allGuides, []),
})

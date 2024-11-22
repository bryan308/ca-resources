import { allResources, allGuides, allGuidesMetas, allResourcesMetas } from "content-collections"
import { loader } from "fumadocs-core/source"
import { createMDXSource } from "@fumadocs/content-collections"

export const resources = loader({
	baseUrl: "/resources",
	source: createMDXSource(allResources, allResourcesMetas),
})

export const guides = loader({
	baseUrl: "/guides",
	source: createMDXSource(allGuides, allGuidesMetas),
})

import { createMetadataImage } from "fumadocs-core/server"
import { guides, resources } from "@/lib/source"

export const guidesMetadataImage = createMetadataImage({
	imageRoute: "/guides-og",
	source: guides,
})

export const resourcesMetadataImage = createMetadataImage({
	imageRoute: "/resources-og",
	source: resources,
})

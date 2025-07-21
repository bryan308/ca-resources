import { createMetadataImage } from "fumadocs-core/server"

import { guidesSource, resourcesSource } from "@/lib/source"

export const guidesMetadataImage = createMetadataImage({
  imageRoute: "/guides-og",
  source: guidesSource,
})

export const resourcesMetadataImage = createMetadataImage({
  imageRoute: "/resources-og",
  source: resourcesSource,
})

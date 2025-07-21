import { loader } from "fumadocs-core/source"
import { createMDXSource } from "fumadocs-mdx"

import { guides, guidesMeta, resources, resourcesMeta } from "@/.source"

export const guidesSource = loader({
  baseUrl: "/guides",
  source: createMDXSource(guides, guidesMeta),
})

export const resourcesSource = loader({
  baseUrl: "/resources",
  source: createMDXSource(resources, resourcesMeta),
})

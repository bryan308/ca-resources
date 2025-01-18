import { defineCollection, defineConfig } from "@content-collections/core"
import {
	createMetaSchema,
	createDocSchema,
	transformMDX,
} from "@fumadocs/content-collections/configuration"

const guidesMeta = defineCollection({
	name: "guidesMeta",
	directory: "content/guides",
	include: "**/meta.json",
	parser: "json",
	schema: createMetaSchema,
})

const resourcesMeta = defineCollection({
	name: "resourcesMeta",
	directory: "content/resources",
	include: "**/meta.json",
	parser: "json",
	schema: createMetaSchema,
})

const resources = defineCollection({
	name: "resources",
	directory: "content/resources",
	include: "**/*.mdx",
	schema: createDocSchema,
	transform: transformMDX,
})

const guides = defineCollection({
	name: "guides",
	directory: "content/guides",
	include: "**/*.mdx",
	schema: createDocSchema,
	transform: transformMDX,
})

export default defineConfig({
	collections: [resourcesMeta, guidesMeta, resources, guides],
})

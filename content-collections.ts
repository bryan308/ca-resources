import { defineCollection, defineConfig } from "@content-collections/core"
import {
	createMetaSchema,
	createDocSchema,
	transformMDX,
} from "@fumadocs/content-collections/configuration"

const docs = defineCollection({
	name: "docs",
	directory: "content/docs",
	include: "**/*.mdx",
	schema: createDocSchema,
	transform: transformMDX,
})

const metas = defineCollection({
	name: "meta",
	directory: "content/docs",
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
	// schema: formatterSchema,
	schema: (z) => ({
		title: z.string(),
		description: z.string().optional(),
	}),
	transform: transformMDX,
})

export default defineConfig({
	collections: [docs, metas, resources, guides],
})

import { defineCollection, defineConfig } from "@content-collections/core"
import { transformMDX } from "@fumadocs/content-collections/configuration"
import { z } from "zod"

const metaSchema = z.object({
	title: z.string().optional(),
	description: z.string().optional(),
	icon: z.string().optional(),
})

const docSchema = z.object({
	title: z.string(),
	description: z.string().optional(),
	modTitle: z.string().optional(),
})

const guidesMeta = defineCollection({
	name: "guidesMeta",
	directory: "content/guides",
	include: "**/meta.json",
	parser: "json",
	schema: metaSchema,
})

const resourcesMeta = defineCollection({
	name: "resourcesMeta",
	directory: "content/resources",
	include: "**/meta.json",
	parser: "json",
	schema: metaSchema,
})

const resources = defineCollection({
	name: "resources",
	directory: "content/resources",
	include: "**/*.mdx",
	schema: docSchema,
	transform: transformMDX,
})

const guides = defineCollection({
	name: "guides",
	directory: "content/guides",
	include: "**/*.mdx",
	schema: docSchema,
	transform: transformMDX,
})

export default defineConfig({
	collections: [resourcesMeta, guidesMeta, resources, guides],
})

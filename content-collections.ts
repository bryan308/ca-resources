import { defineCollection, defineConfig } from "@content-collections/core"
import {
	createMetaSchema,
	createDocSchema,
	transformMDX,
} from "@fumadocs/content-collections/configuration"

import { compileMDX } from "@content-collections/mdx"
import remarkGfm from "remark-gfm"
import rehypePrismPlus from "rehype-prism-plus"
import rehypeAutolinkHeadings from "rehype-autolink-headings"
import rehypeSlug from "rehype-slug"
import rehypeKatex from "rehype-katex"
import rehypePresetMinify from "rehype-preset-minify"

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

const guides = defineCollection({
	name: "guides",
	directory: "src/guides-pages",
	include: "**/*.mdx",
	schema: (z) => ({
		title: z.string(),
		modTitle: z.string(),
		description: z.string(),
		thumbnail: z.string().optional(),
		category: z.string(),
		readingTime: z.string(),
	}),
	transform: async (document, context) => {
		const mdx = await compileMDX(context, document, {
			remarkPlugins: [remarkGfm],
			rehypePlugins: [
				rehypeSlug,
				[
					rehypeAutolinkHeadings,
					{
						behavior: "wrap",
						properties: {
							className: ["anchor"],
							title: "Permalink to this heading",
						},
					},
				],
				rehypePrismPlus,
				rehypeKatex,
				rehypePresetMinify,
			],
		})
		return {
			...document,
			mdx,
		}
	},
})

export default defineConfig({
	collections: [docs, metas, guides],
})

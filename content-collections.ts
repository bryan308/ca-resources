import { defineCollection, defineConfig } from "@content-collections/core"
import { compileMDX } from "@content-collections/mdx"

import remarkGfm from "remark-gfm"
import rehypePrismPlus from "rehype-prism-plus"
import rehypeAutolinkHeadings from "rehype-autolink-headings"
import rehypeSlug from "rehype-slug"
import rehypeKatex from "rehype-katex"
import rehypePresetMinify from "rehype-preset-minify"

const posts = defineCollection({
	name: "posts",
	directory: "src/guides-pages",
	include: "**/*.mdx",
	schema: (z) => ({
		title: z.string(),
		description: z.string(),
		thumbnail: z.string().optional(),
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
	collections: [posts],
})

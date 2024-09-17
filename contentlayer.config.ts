import { defineDocumentType, makeSource } from "contentlayer2/source-files"

import remarkGfm from "remark-gfm"
import rehypePrismPlus from "rehype-prism-plus"
import rehypeAutolinkHeadings from "rehype-autolink-headings"
import rehypeSlug from "rehype-slug"
import rehypeKatex from "rehype-katex"
import rehypePresetMinify from "rehype-preset-minify"

export const Guide = defineDocumentType(() => ({
	name: "Guide",
	filePathPattern: `**/*.mdx`,
	contentType: "mdx",
	// * fields: The fields of the document type.
	fields: {
		title: { type: "string", required: true },
		description: { type: "string", required: true },
		thumbnail: { type: "string", required: true },
	},
	computedFields: {
    url: { type: "string", resolve: (guides) => `/guides/${guides._raw.flattenedPath}` }
	},
}))

export default makeSource({
	// * contentDirPath: The path to the directory where your the is located.
	contentDirPath: "src/guides-pages",
	documentTypes: [Guide],
	// * mdx: MDX configuration options.
	mdx: {
		remarkPlugins: [remarkGfm],
		rehypePlugins: [
			rehypePrismPlus,
			rehypeAutolinkHeadings,
			rehypeSlug,
			rehypeKatex,
			rehypePresetMinify,
		],
	},
})

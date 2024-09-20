import { defineDocumentType, makeSource } from "contentlayer2/source-files"

import remarkGfm from "remark-gfm"
import rehypePrismPlus from "rehype-prism-plus"
import rehypeAutolinkHeadings from "rehype-autolink-headings"
import rehypeSlug from "rehype-slug"
import rehypeKatex from "rehype-katex"
import rehypePresetMinify from "rehype-preset-minify"
import { fromHtmlIsomorphic } from "hast-util-from-html-isomorphic"

const icon = fromHtmlIsomorphic(
	`
  <span class="content-header-link">
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 linkicon">
			<path d="M12.232 4.232a2.5 2.5 0 0 1 3.536 3.536l-1.225 1.224a.75.75 0 0 0 1.061 1.06l1.224-1.224a4 4 0 0 0-5.656-5.656l-3 3a4 4 0 0 0 .225 5.865.75.75 0 0 0 .977-1.138 2.5 2.5 0 0 1-.142-3.667l3-3Z" />
			<path d="M11.603 7.963a.75.75 0 0 0-.977 1.138 2.5 2.5 0 0 1 .142 3.667l-3 3a2.5 2.5 0 0 1-3.536-3.536l1.225-1.224a.75.75 0 0 0-1.061-1.06l-1.224 1.224a4 4 0 1 0 5.656 5.656l3-3a4 4 0 0 0-.225-5.865Z" />
		</svg>
  </span>
`,
	{ fragment: true }
)

export const Guide = defineDocumentType(() => ({
	name: "Guide",
	filePathPattern: `**/*.mdx`,
	contentType: "mdx",
	fields: {
		title: { type: "string", required: true },
		description: { type: "string", required: true },
		thumbnail: { type: "string", required: true },
		category: { type: "string", required: false },
	},
	computedFields: {
		url: { type: "string", resolve: (guides) => `/guides/${guides._raw.flattenedPath}` },
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
			[
				rehypeAutolinkHeadings,
				{
					behavior: "wrap",
					headingProperties: {
						className: ["content-header"],
					},
					content: icon,
				},
			],
			rehypeSlug,
			rehypeKatex,
			rehypePresetMinify,
		],
	},
})

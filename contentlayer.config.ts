import { defineDocumentType, makeSource } from "contentlayer/source-files"

export const Post = defineDocumentType(() => ({
	name: "Post",
	contentType: "mdx",
	filePathPattern: `**/*.mdx`,
	fields: {
		title: { type: "string", required: true },
		description: { type: "string", required: false },
		thumbnail: { type: "string", required: false },
		date: { type: "date", required: false },
	},
	computedFields: {
		url: { type: "string", resolve: (guide) => `/guides/${guide._raw.flattenedPath}` },
	},
}))

export default makeSource({ contentDirPath: "guides-pages", documentTypes: [Post] })

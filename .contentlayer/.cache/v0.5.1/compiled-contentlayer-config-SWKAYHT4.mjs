// contentlayer.config.ts
import { defineDocumentType, makeSource } from "contentlayer2/source-files";
import remarkGfm from "remark-gfm";
import rehypePrismPlus from "rehype-prism-plus";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import rehypeKatex from "rehype-katex";
import rehypePresetMinify from "rehype-preset-minify";
var Guide = defineDocumentType(() => ({
  name: "Guide",
  filePathPattern: `**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    description: { type: "string", required: true },
    thumbnail: { type: "string", required: true }
  },
  computedFields: {
    url: { type: "string", resolve: (guides) => `/guides/${guides._raw.flattenedPath}` }
  }
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "src/guides-pages",
  documentTypes: [Guide],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypePrismPlus,
      rehypeAutolinkHeadings,
      rehypeSlug,
      rehypeKatex,
      rehypePresetMinify
    ]
  }
});
export {
  Guide,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-SWKAYHT4.mjs.map

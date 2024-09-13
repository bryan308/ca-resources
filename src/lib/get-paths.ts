import { getAllMdx } from "@/lib/mdx"

export function getAllPaths(): { slug: string; title: string }[] {
	const mdxFiles = getAllMdx()

	return mdxFiles.map(({ frontMatter }) => ({
		title: frontMatter.title,
		slug: frontMatter.slug,
	}))
}

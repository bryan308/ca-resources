import { allPosts } from "contentlayer/generated"
// import type { MDXComponents } from "mdx/types"
import { useMDXComponent } from "next-contentlayer/hooks"
// import Link from "next/link"
import { notFound } from "next/navigation"
import { components } from "@/components/shared/MDX"
import "./slug.css"

// Define your custom MDX components.
// const mdxComponents: MDXComponents = {
// 	// Override the default <a> element to use the next/link component.
// 	a: ({ href, children }) => <Link href={href as string}>{children}</Link>,
// 	// Add a custom component.
// 	MyComponent: () => <div>Hello World!</div>,
// }

export const generateStaticParams = async () => {
	const posts = allPosts
	return posts.map((post) => ({ slug: post._raw.flattenedPath }))
}

export default async function Page({ params }: { params: { slug: string } }) {
	// Find the post for the current page.
	const post = allPosts.find((post) => post._raw.flattenedPath === params.slug)

	// 404 if the post does not exist.
	if (!post) notFound()

	// Parse the MDX file via the useMDXComponent hook.
	const MDXContent = useMDXComponent(post?.body.code)

	return (
		<div>
			{/* Some code ... */}
			<MDXContent components={components} /> {/* <= Include your custom MDX components here */}
		</div>
	)
}

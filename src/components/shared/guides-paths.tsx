"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
// import { MDXFrontMatter } from "@/lib/types"
import { cn } from "@/lib/utils"
import { allPosts } from "content-collections"

// interface PathsProp {
// 	paths: MDXFrontMatter[]
// }

function GuidestPaths() {
	const pathname = usePathname()

	// const post = allPosts.find((post) => post?._meta.path)

	const currentPath = (isActive: boolean): string =>
		isActive ? "text-foreground bg-muted/50" : "text-muted-foreground"

	return (
		<>
			{allPosts
				.sort((a, b) => a.title.localeCompare(b.title))
				.map((p, i: number) => {
					const isActive = pathname === `/guides/${p._meta.path}`
					return (
						<div key={i}>
							<Link
								href={`/guides/${p._meta.path}`}
								className={cn(
									"inline-block p-2 my-px text-sm w-full rounded-lg",
									"hover:bg-muted/50 hover:text-foreground focus:bg-muted/50 focus:text-foreground",
									currentPath(isActive)
								)}
							>
								{p.title}
							</Link>
						</div>
					)
				})}
		</>
	)
}

export default GuidestPaths

"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { MDXFrontMatter } from "@/lib/types"
import { cn } from "@/lib/utils"

interface PathsProp {
	paths: MDXFrontMatter[]
}

function ComponentPaths({ paths }: PathsProp) {
	const pathname = usePathname()

	const currentPath = (isActive: boolean): string =>
		isActive ? "text-foreground bg-muted/50" : "text-muted-foreground"

	return (
		<>
			{paths
				.sort((a, b) => a.title.localeCompare(b.title))
				.map((p, i) => {
					const isActive = pathname === `/guides/${p.slug}`
					return (
						<li key={i}>
							<Link
								href={`/guides/${p.slug}`}
								className={cn(
									"inline-block p-2 my-px text-sm w-full rounded-lg",
									"hover:bg-muted/50 hover:text-foreground focus:bg-muted/50 focus:text-foreground",
									currentPath(isActive)
								)}
							>
								{p.title}
							</Link>
						</li>
					)
				})}
		</>
	)
}

export default ComponentPaths

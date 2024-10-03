"use client"

import React from "react"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { allGuides } from "contentlayer/generated"

function GuidestPaths({ category }: { category: string }) {
	const pathname = usePathname()

	// * currentPath: A function to determine if the current path matches the link.
	const currentPath = (isActive: boolean): string =>
		isActive ? "text-foreground bg-muted/50" : "text-muted-foreground"

	return (
		<>
			{allGuides
				.filter((g) => g?.category && g.category.trim() === category.trim())
				// .sort((a, b) => a.modTitle.localeCompare(b.modTitle))
				.map((p, i: number) => {
					const isActive = pathname === `/guides/${p._raw.flattenedPath}`
					return (
						<div key={i}>
							<Link
								href={`/guides/${p._raw.flattenedPath}`}
								className={cn(
									"inline-block p-2 my-px text-sm w-full rounded-lg",
									"hover:bg-muted/50 hover:text-foreground focus:bg-muted/50 focus:text-foreground",
									currentPath(isActive)
								)}
							>
								{p.modTitle}
							</Link>
						</div>
					)
				})}
		</>
	)
}

export default GuidestPaths

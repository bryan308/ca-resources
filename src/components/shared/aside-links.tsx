"use client"

import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"
import React from "react"

interface IAsideLinks {
	data: {
		text: string
		path: string
	}[]
}

function AsideLinks({ data }: IAsideLinks) {
	const pathname = usePathname()

	const currentPath = (isActive: boolean): string =>
		isActive ? "text-foreground bg-muted/50 font-semibold" : "text-muted-foreground"

	return (
		<>
			{data
				.sort((a, b) => a.text.localeCompare(b.text))
				.map((d, i) => {
					const isActive = pathname === d.path
					return (
						<div key={i}>
							<Link
								href={d.path}
								className={cn(
									"inline-block p-2 my-px text-sm w-full rounded-lg",
									"hover:bg-muted/50 hover:text-foreground focus:bg-muted/50 focus:text-foreground",
									currentPath(isActive)
								)}
							>
								{d.text}
							</Link>
						</div>
					)
				})}
		</>
	)
}

export default AsideLinks

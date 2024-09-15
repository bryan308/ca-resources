"use client"

import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { SheetTrigger } from "../ui/sheet"
import { ArrowRight } from "lucide-react"
import { GuidePath, Path, SheetLinksProps } from "@/lib/types"
import { allPosts } from "content-collections"

const SheetLinks: React.FC<SheetLinksProps> = ({ header, paths = [], isGuide = false }) => {
	const links = isGuide
		? allPosts.map((post) => ({ slug: post._meta.path, title: post.title }))
		: paths

	const getHref = (item: GuidePath | Path) =>
		isGuide ? `/guides/${(item as GuidePath).slug}` : (item as Path).path
	const getTitle = (item: GuidePath | Path) =>
		isGuide ? (item as GuidePath).title : (item as Path).text

	const pathname = usePathname()

	const currentPath = (isActive: boolean): string =>
		isActive ? "font-semibold text-foreground" : "text-muted-foreground hover:text-foreground"

	return (
		<div>
			<h4 className="mb-2 text-base">{header}</h4>
			{links.length > 0 ? (
				links
					.sort((a, b) => getTitle(a).localeCompare(getTitle(b)))
					.map((item, i) => {
						const isActive = pathname === getHref(item)

						return (
							<SheetTrigger
								key={i}
								asChild
							>
								<Link
									href={getHref(item)}
									className={cn(
										"group text-base flex items-center gap-2 mb-2",
										currentPath(isActive)
									)}
								>
									<ArrowRight className="group-hover:text-foreground size-4 text-muted-foreground" />
									{getTitle(item)}
								</Link>
							</SheetTrigger>
						)
					})
			) : (
				<p>{isGuide ? "No guides available" : "No links available"}</p>
			)}
		</div>
	)
}

export default SheetLinks

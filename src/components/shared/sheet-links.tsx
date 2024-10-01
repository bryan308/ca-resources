"use client"

import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { SheetTrigger } from "../ui/sheet"
import { ArrowRight, Minus } from "lucide-react"
import { GuidePath, Path, SheetLinksProps } from "@/lib/types"
import { allGuides } from "content-collections"

const SheetLinks: React.FC<SheetLinksProps & { category?: string }> = ({
	header,
	paths = [],
	isGuide = false,
	category, // New prop for filtering by category
}) => {
	// * Filter guides by category if the category prop is provided
	const guides = category
		? allGuides.filter((guide) => guide?.category?.trim() === category)
		: allGuides

	const links = isGuide
		? guides.map((guide) => ({ slug: guide._meta.path, title: guide.modTitle }))
		: paths

	// * getHref: A function to get the href of the link.
	const getHref = (item: GuidePath | Path) =>
		isGuide ? `/guides/${(item as GuidePath).slug}` : (item as Path).path

	// * getTitle: A function to get the title of the link.
	const getTitle = (item: GuidePath | Path) =>
		isGuide ? (item as GuidePath).title : (item as Path).text

	const pathname = usePathname()

	// * currentPath: A function to determine if the current path matches the link.
	const currentPath = (isActive: boolean): string =>
		isActive ? "font-semibold text-foreground" : "text-muted-foreground hover:text-foreground"

	return (
		<div>
			<h4 className="mb-2 text-lg">{header}</h4>
			{links.length > 0
				? links
						// .sort((a, b) => getTitle(a).localeCompare(getTitle(b)))
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
											"group text-base flex items-center gap-2 mb-2 pl-2",
											currentPath(isActive)
										)}
									>
										{isActive ? (
											<ArrowRight
												className={cn(currentPath(isActive), "group-hover:text-foreground size-4")}
											/>
										) : (
											<Minus className="group-hover:text-foreground size-4 text-muted-foreground" />
										)}
										{getTitle(item)}
									</Link>
								</SheetTrigger>
							)
						})
				: null}
		</div>
	)
}

export default SheetLinks

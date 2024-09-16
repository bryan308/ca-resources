import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons"
import Link from "next/link"

interface IPagination {
	previous: { title: string; path: string } | null
	next: { title: string; path: string } | null
}

function Pagination({ next, previous }: IPagination) {
	return (
		<div className="p-6 xl:p-12"> 
			<nav
				aria-label="pagination"
				role="navigation"
				className={`flex items-center ${
					!previous ? "justify-end" : !next ? "justify-start" : "justify-between"
				}`}
			>
				{previous && (
					<Link
						aria-label={`Go to previous guide: ${previous.title}`}
						className="p-2 rounded-md flex items-end"
						href={`/guides/${previous.path}`}
					>
						<ChevronLeftIcon className="size-4 mb-1 text-muted-foreground" />
						<div className="group">
							<span className="text-sm text-muted-foreground group-hover:text-foreground">
								Previous
							</span>
							<div className="text-base text-foreground font-semibold">{previous.title}</div>
						</div>
					</Link>
				)}
				{next && (
					<Link
						aria-label={`Go to next guide: ${next.title}`}
						className="p-2 rounded-md flex items-end"
						href={`/guides/${next.path}`}
					>
						<div className="group">
							<span className="text-sm text-muted-foreground group-hover:text-foreground">
								Next
							</span>
							<div className="text-base text-foreground font-semibold">{next.title}</div>
						</div>
						<ChevronRightIcon className="size-4 mb-1 text-muted-foreground" />
					</Link>
				)}
			</nav>
		</div>
	)
}

export default Pagination

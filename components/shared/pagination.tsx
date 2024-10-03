import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons"
import Link from "next/link"

interface IPagination {
	page: string
	previous: { title: string; path: string } | null
	next: { title: string; path: string } | null
}

function Pagination({ page, next, previous }: IPagination) {
	return (
		<div className={`${(next || previous) && "p-6 xl:p-12"}`}>
			<nav
				aria-label="pagination"
				role="navigation"
				className={`flex items-center ${
					!previous ? "justify-end" : !next ? "justify-start" : "justify-between"
				}`}
			>
				{previous && (
					<Link
						aria-label={`Go to previous ${page}: ${previous.title}`}
						className="p-2 rounded-md flex items-end group"
						href={`/${page}/${previous.path}`}
					>
						<ChevronLeftIcon className="size-4 mb-1 text-muted-foreground group-hover:text-foreground" />
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
						aria-label={`Go to next ${page}: ${next.title}`}
						className="p-2 rounded-md flex items-end group"
						href={`/${page}/${next.path}`}
					>
						<div className="group">
							<span className="text-sm text-muted-foreground group-hover:text-foreground">
								Next
							</span>
							<div className="text-base text-foreground font-semibold">{next.title}</div>
						</div>
						<ChevronRightIcon className="size-4 mb-1 text-muted-foreground group-hover:text-foreground" />
					</Link>
				)}
			</nav>
		</div>
	)
}

export default Pagination

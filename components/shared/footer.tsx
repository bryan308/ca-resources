import Link from "next/link"
import React from "react"

export const Footer = () => {
	return (
		<footer className="mt-auto border-t bg-fd-card py-12 text-fd-secondary-foreground">
			<div className="px-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
				<div>
					<p className="mb-1 text-sm font-semibold">CA Resources</p>
					<p className="text-xs">
						Built with 💖 by{" "}
						<Link
							href="https://cdrcangulo.vercel.app"
							rel="noreferrer noopener"
							target="_blank"
							className="font-medium"
						>
							Cedric
						</Link>
					</p>
				</div>
			</div>
		</footer>
	)
}

import Link from "next/link"
import React from "react"

export const Footer = () => {
	return (
		<footer className="mt-10 border-t bg-fd-card py-12 text-fd-secondary-foreground">
			<div className="px-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
				<div>
					<p className="mb-1 text-sm font-semibold">CA Resources</p>
					<p className="text-xs">
						Built with 💖 by{" "}
						<Link
							href="https://cedricc.vercel.app"
							rel="noreferrer noopener"
							target="_blank"
							className="font-medium underline"
						>
							Cedric Angulo
						</Link>
					</p>
				</div>
				<div>
					<p className="text-xs">
						Powered by{" "}
						<Link
							href="https://fumadocs.vercel.app"
							target="_blank"
							rel="noreferrer noopener"
							className="font-medium underline"
						>
							fumadocs
						</Link>
					</p>
				</div>
			</div>
		</footer>
	)
}

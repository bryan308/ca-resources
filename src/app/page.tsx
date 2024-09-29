import React from "react"

import Link from "next/link"
import PageHeader from "@/components/shared/page-header"
import Contributors from "@/components/shared/contributors"
import { Separator } from "@/components/ui/separator"

export default function Introduction() {
	return (
		<>
			<section>
				<PageHeader>Introduction</PageHeader>
				<h4>Welcome to CA Resources!</h4>
				<p>
					It is a website designed to improve productivity, especially for web development, among
					other fields in education. It provides the most valuable resources and guides.
				</p>
				<Separator className="my-12" />
				<h3 className="text-2xl text-foreground font-bold mb-2">Inspired by</h3>
				<p>
					The conceptualization of CA Resources is influenced by the{" "}
					<Link
						href="https://vercel.com/geist/introduction"
						target="_blank"
						rel="noopener noreferrer"
						className="link"
					>
						Vercel Geist Design System
					</Link>
					.
				</p>
				<p>
					<strong className="text-foreground">CA Resources</strong> was created and managed by{" "}
					<Link
						href="https://cdrcangulo.vercel.app/"
						target="_blank"
						rel="noopener noreferrer"
						className="link"
					>
						Cedric Angulo
					</Link>
					.
				</p>
				<Separator className="my-12" />
				<h3 className="text-2xl text-foreground font-bold mb-2">Contributors</h3>
				<Contributors className="mb-4" />
				<p>
					Interested in Contributing? Checkout our{" "}
					<Link
						href="https://github.com/bryan308/ca-resources/tree/main/.github/CONTRIBUTION.md"
						target="_blank"
						rel="noopener noreferrer"
						className="link"
					>
						contribution guide
					</Link>
					.
				</p>
			</section>
		</>
	)
}

import PageHeader from "@/components/shared/page-header"
import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface Contributor {
	id: number
	login: string
	html_url: string
	avatar_url: string
}

export default async function Introduction() {
	const response = await fetch("https://ca-resources.vercel.app/api/contributors", {
		next: { revalidate: 60 },
	})
	const contributors: Contributor[] = await response.json()

	return (
		<>
			<section>
				<PageHeader>Introduction</PageHeader>
				<h4>Welcome to CA Resources!</h4>
				<p>
					It is a website designed to improve productivity, especially for web development, among
					other fields in education. It provides the most valuable resources and guides.
				</p>
			</section>
			<section>
				<h2 className="text-2xl text-foreground font-bold mb-2">Inspired by</h2>
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
			</section>
			<section>
				<h2 className="text-2xl text-foreground font-bold mb-2">Contributors</h2>
				<div className="flex flex-wrap gap-2">
					{contributors.length === 0 && <p>No contributors found.</p>}
					{contributors.map((contributor: Contributor) => (
						<div key={contributor.id}>
							{contributor.login !== "bryan308" && (
								<Avatar>
									<Link
										href={contributor.html_url}
										target="_blank"
										rel="noopener noreferrer"
									>
										<AvatarImage
											src={contributor.avatar_url}
											alt={contributor.login}
										/>
										<AvatarFallback>{contributor.login}</AvatarFallback>
									</Link>
								</Avatar>
							)}
						</div>
					))}
				</div>
			</section>
		</>
	)
}

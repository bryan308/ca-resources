"use client"

import { useEffect, useState } from "react"
import PageHeader from "@/components/shared/page-header"
import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Skeleton } from "@/components/ui/skeleton"

interface Contributor {
	id: number
	login: string
	html_url: string
	avatar_url: string
}

export default function Introduction() {
	const [contributors, setContributors] = useState<Contributor[]>([])
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		const fetchContributors = async () => {
			try {
				const response = await fetch("/api/contributors")
				const data = await response.json()
				setContributors(data)
			} catch (error) {
				console.error("Error fetching contributors:", error)
			} finally {
				setLoading(false)
			}
		}

		fetchContributors()
	}, [])

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
					{loading ? (
						<>
							{Array(4)
								.fill(null)
								.map((_, index) => (
									<Skeleton
										key={index}
										className="size-10 rounded-full"
									/>
								))}
						</>
					) : (
						<>
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
						</>
					)}
				</div>
			</section>
		</>
	)
}

"use client"

import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { cn } from "@/lib/utils"
import { useEffect, useState } from "react"
import { Skeleton } from "../ui/skeleton"

interface Contributor {
	id: number
	login: string
	html_url: string
	avatar_url: string
}

// ! async function fetchContributors(): Promise<Contributor[]> {
// ! 	const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}api/contributors`, {
// ! 		headers: {
// ! 			Accept: "application/vnd.github+json",
// ! 		},
// ! 	})
// ! 	if (!response.ok) {
// ! 		throw new Error("Failed to fetch contributors")
// ! 	}
// ! 	return response.json()
// ! }

export default function Contributors({ className }: { className?: string }) {
	// ! const contributors = await fetchContributors()

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
		<div className={cn(className, "flex flex-wrap gap-2")}>
			{loading ? (
				<>
					{/* TODO: Dynamic skeleton count based on the total contributors */}
					{Array(2)
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
										<AvatarFallback className="text-xs">{contributor.login}</AvatarFallback>
									</Link>
								</Avatar>
							)}
						</div>
					))}
				</>
			)}
		</div>
	)
}
